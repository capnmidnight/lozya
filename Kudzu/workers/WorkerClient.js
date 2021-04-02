import { TypedEvent, TypedEventBase } from "../events/EventBase";
import { assertNever, isArray, isFunction, isNullOrUndefined, isNumber, isString } from "../typeChecks";
import { WorkerServerMessageType } from "./WorkerServer";
export class WorkerClient extends TypedEventBase {
    constructor(scriptPath, minScriptPathOrWorkers, workerPoolSize) {
        super();
        this.taskCounter = 0;
        this.messageHandlers = new Map();
        if (!WorkerClient.isSupported) {
            console.warn("Workers are not supported on this system.");
        }
        // Normalize constructor parameters.
        if (isNumber(minScriptPathOrWorkers)) {
            workerPoolSize = minScriptPathOrWorkers;
            minScriptPathOrWorkers = undefined;
        }
        if (isNullOrUndefined(workerPoolSize)) {
            workerPoolSize = 1;
        }
        // Validate parameters
        if (workerPoolSize < 1) {
            throw new Error("Worker pool size must be a postive integer greater than 0");
        }
        // Choose which version of the script we're going to load.
        if (process.env.NODE_ENV === "development"
            || !isString(minScriptPathOrWorkers)) {
            this._script = scriptPath;
        }
        else {
            this._script = minScriptPathOrWorkers;
        }
        if (isArray(minScriptPathOrWorkers)) {
            this.workers = minScriptPathOrWorkers;
        }
        else {
            this.workers = new Array(workerPoolSize);
            for (let i = 0; i < workerPoolSize; ++i) {
                this.workers[i] = new Worker(this._script);
            }
        }
        this.dispatchMessageResponse = (evt) => {
            const data = evt.data;
            // Did this response message match the current invocation?
            if (data.methodName === WorkerServerMessageType.Event) {
                const evt = new TypedEvent(data.type);
                this.dispatchEvent(Object.assign(evt, data.data));
            }
            else {
                const messageHandler = this.messageHandlers.get(data.taskID);
                const { onProgress, resolve, reject, methodName } = messageHandler;
                if (data.methodName === WorkerServerMessageType.Progress) {
                    if (isFunction(onProgress)) {
                        onProgress(data.soFar, data.total, data.msg);
                    }
                }
                else {
                    // When the invocation is complete, we want to stop listening to the worker
                    // message channel so we don't eat up processing messages that have no chance
                    // over pertaining to the invocation.
                    this.messageHandlers.delete(data.taskID);
                    if (data.methodName === WorkerServerMessageType.Return) {
                        resolve(undefined);
                    }
                    else if (data.methodName === WorkerServerMessageType.ReturnValue) {
                        resolve(data.returnValue);
                    }
                    else if (data.methodName === WorkerServerMessageType.Error) {
                        reject(new Error(`${methodName} failed. Reason: ${data.errorMessage}`));
                    }
                    else {
                        assertNever(data);
                    }
                }
            }
        };
        for (const worker of this.workers) {
            worker.addEventListener("message", this.dispatchMessageResponse);
        }
    }
    popWorker() {
        const worker = this.workers.pop();
        worker.removeEventListener("message", this.dispatchMessageResponse);
        return worker;
    }
    get scriptPath() {
        return this._script;
    }
    executeOnWorker(worker, taskID, methodName, params, transferables, onProgress) {
        return new Promise((resolve, reject) => {
            this.messageHandlers.set(taskID, {
                onProgress,
                resolve,
                reject,
                methodName
            });
            if (params && transferables) {
                worker.postMessage({
                    taskID,
                    methodName,
                    params
                }, transferables);
            }
            else if (params) {
                worker.postMessage({
                    taskID,
                    methodName,
                    params
                });
            }
            else if (transferables) {
                worker.postMessage({
                    taskID,
                    methodName
                }, transferables);
            }
            else {
                worker.postMessage({
                    taskID,
                    methodName
                });
            }
        });
    }
    /**
     * Execute a method on the worker thread.
     * @param methodName - the name of the method to execute.
     * @param params - the parameters to pass to the method.
     * @param transferables - any values in any of the parameters that should be transfered instead of copied to the worker thread.
     * @param onProgress - a callback for receiving progress reports on long-running invocations.
     */
    execute(methodName, params = null, transferables = null, onProgress = null) {
        if (!WorkerClient.isSupported) {
            return Promise.reject(new Error("Workers are not supported on this system."));
        }
        // Normalize method parameters.
        if (isFunction(transferables)
            && !onProgress) {
            onProgress = transferables;
            transferables = null;
        }
        // taskIDs help us keep track of return values.
        const taskID = this.taskCounter++;
        // Workers are pooled, so the modulus selects them in a round-robin fashion.
        const workerID = taskID % this.workers.length;
        const worker = this.workers[workerID];
        return this.executeOnWorker(worker, taskID, methodName, params, transferables, onProgress);
    }
}
WorkerClient.isSupported = "Worker" in globalThis;
//# sourceMappingURL=WorkerClient.js.map