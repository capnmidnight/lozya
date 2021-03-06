import { isNullOrUndefined, isNumber, isString } from "../typeChecks";
import { WorkerClient } from "../workers/WorkerClient";
import { ImageFetcher } from "./ImageFetcher";
export class ImageFetcherWorkerClient extends ImageFetcher {
    constructor(scriptPath, minScriptPath, workerPoolSize = 1) {
        super();
        if (isNumber(minScriptPath)) {
            workerPoolSize = minScriptPath;
            minScriptPath = undefined;
        }
        if (isNullOrUndefined(workerPoolSize)) {
            workerPoolSize = 1;
        }
        if (isString(minScriptPath)) {
            this.worker = new WorkerClient(scriptPath, minScriptPath, workerPoolSize);
        }
        else {
            this.worker = new WorkerClient(scriptPath, workerPoolSize);
        }
    }
    async _getBuffer(path, headers, onProgress) {
        onProgress = this.normalizeOnProgress(headers, onProgress);
        headers = this.normalizeHeaders(headers);
        if (this.worker.enabled) {
            return await this.worker.execute("getBuffer", [path, headers], onProgress);
        }
        else {
            return await super._getBuffer(path, headers, onProgress);
        }
    }
    async _postObjectForBuffer(path, obj, contentType, headers, onProgress) {
        onProgress = this.normalizeOnProgress(headers, onProgress);
        headers = this.normalizeHeaders(headers);
        if (this.worker.enabled && !(obj instanceof FormData)) {
            return await this.worker.execute("postObjectForBuffer", [path, obj, contentType, headers], onProgress);
        }
        else {
            return await super._postObjectForBuffer(path, obj, contentType, headers, onProgress);
        }
    }
    async _getObject(path, headers, onProgress) {
        onProgress = this.normalizeOnProgress(headers, onProgress);
        headers = this.normalizeHeaders(headers);
        if (this.worker.enabled) {
            return await this.worker.execute("getObject", [path, headers], onProgress);
        }
        else {
            return await super._getObject(path, headers, onProgress);
        }
    }
    async _postObjectForObject(path, obj, contentType, headers, onProgress) {
        onProgress = this.normalizeOnProgress(headers, onProgress);
        headers = this.normalizeHeaders(headers);
        if (this.worker.enabled && !(obj instanceof FormData)) {
            return await this.worker.execute("postObjectForObject", [path, obj, contentType, headers], onProgress);
        }
        else {
            return await super._postObjectForObject(path, obj, contentType, headers, onProgress);
        }
    }
    async _getFile(path, headers, onProgress) {
        onProgress = this.normalizeOnProgress(headers, onProgress);
        headers = this.normalizeHeaders(headers);
        if (this.worker.enabled) {
            return await this.worker.execute("getFile", [path, headers], onProgress);
        }
        else {
            return await super._getFile(path, headers, onProgress);
        }
    }
    async _postObjectForFile(path, obj, contentType, headers, onProgress) {
        onProgress = this.normalizeOnProgress(headers, onProgress);
        headers = this.normalizeHeaders(headers);
        if (this.worker.enabled && !(obj instanceof FormData)) {
            return await this.worker.execute("postObjectForFile", [path, obj, contentType, headers], onProgress);
        }
        else {
            return await super._postObjectForFile(path, obj, contentType, headers, onProgress);
        }
    }
}
//# sourceMappingURL=ImageFetcherWorkerClient.js.map