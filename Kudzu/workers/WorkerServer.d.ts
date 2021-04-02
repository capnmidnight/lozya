import { EventBase } from "../events/EventBase";
export declare type workerServerMethod = (taskID: number, ...params: any[]) => Promise<void>;
export declare type createTransferableCallback<T> = (returnValue: T) => Transferable[];
export declare enum WorkerServerMessageType {
    Error = "error",
    Progress = "progress",
    Return = "return",
    ReturnValue = "returnValue",
    Event = "event"
}
interface WorkerServerMessage<T extends WorkerServerMessageType> {
    methodName: T;
}
export interface WorkerServerErrorMessage extends WorkerServerMessage<WorkerServerMessageType.Error> {
    taskID: number;
    errorMessage: string;
}
export interface WorkerServerProgressMessage extends WorkerServerMessage<WorkerServerMessageType.Progress> {
    taskID: number;
    soFar: number;
    total: number;
    msg: string;
}
export interface WorkerServerReturnMessage extends WorkerServerMessage<WorkerServerMessageType.Return> {
    taskID: number;
}
export interface WorkerServerReturnValueMessage extends WorkerServerMessage<WorkerServerMessageType.ReturnValue> {
    taskID: number;
    returnValue: any;
}
export interface WorkerServerEventMessage extends WorkerServerMessage<WorkerServerMessageType.Event> {
    type: string;
    data: any;
}
export declare type WorkerServerMessages = WorkerServerErrorMessage | WorkerServerProgressMessage | WorkerServerReturnMessage | WorkerServerReturnValueMessage | WorkerServerEventMessage;
export interface WorkerMethodCallMessage {
    taskID: number;
    methodName: string;
    params: any[];
}
export declare class WorkerServer {
    private self;
    private methods;
    /**
     * Creates a new worker thread method call listener.
     * @param self - the worker scope in which to listen.
     */
    constructor(self: DedicatedWorkerGlobalScope);
    handle<U extends EventBase, T>(object: U, type: string, makePayload?: (evt: Event) => T, transferReturnValue?: createTransferableCallback<T>): void;
    /**
     * Report an error back to the calling thread.
     * @param taskID - the invocation ID of the method that errored.
     * @param errorMessage - what happened?
     */
    private onError;
    /**
     * Report progress through long-running invocations. If your invocable
     * functions don't report progress, this can be safely ignored.
     * @param taskID - the invocation ID of the method that is updating.
     * @param soFar - how much of the process we've gone through.
     * @param total - the total amount we need to go through.
     * @param msg - an optional message to include as part of the progress update.
     */
    private onProgress;
    /**
     * Return the results back to the invoker.
     * @param taskID - the invocation ID of the method that has completed.
     * @param returnValue - the (optional) value that is being returned.
     * @param transferables - an (optional) array of values that appear in the return value that should be transfered back to the calling thread, rather than copied.
     */
    private onReturn;
    /**
     * Registers a function call for cross-thread invocation.
     * @param methodName - the name of the method to use during invocations.
     * @param asyncFunc - the function to execute when the method is invoked.
     * @param transferReturnValue - an (optional) function that reports on which values in the `returnValue` should be transfered instead of copied.
     */
    add<T>(methodName: string, asyncFunc: (...args: any[]) => Promise<T>, transferReturnValue?: createTransferableCallback<T>): void;
}
export {};
