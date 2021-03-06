import { BaseAudioElement } from "../BaseAudioElement";
import { connect, disconnect } from "../GraphVisualizer";
import { NoSpatializationListener } from "./spatializers/NoSpatializationListener";
export class AudioDestination extends BaseAudioElement {
    _spatializedInput;
    _nonSpatializedInput;
    _trueDestination;
    constructor(audioContext, destination) {
        super(audioContext);
        this._spatializedInput = audioContext.createGain();
        this._nonSpatializedInput = audioContext.createGain();
        connect(this._nonSpatializedInput, this.volumeControl);
        this.setDestination(destination);
    }
    disposed2 = false;
    dispose() {
        if (!this.disposed2) {
            this.setDestination(null);
            disconnect(this._nonSpatializedInput, this.volumeControl);
            super.dispose();
            this.disposed2 = true;
        }
    }
    get spatialized() {
        return !(this.spatializer instanceof NoSpatializationListener);
    }
    get spatializedInput() {
        return this._spatializedInput;
    }
    get nonSpatializedInput() {
        return this._nonSpatializedInput;
    }
    setDestination(v) {
        if (v !== this._trueDestination) {
            if (this._trueDestination) {
                disconnect(this.volumeControl, this._trueDestination);
            }
            this._trueDestination = v;
            if (this._trueDestination) {
                connect(this.volumeControl, this._trueDestination);
            }
        }
    }
    disconnectSpatializer() {
        disconnect(this.spatializer.output, this.volumeControl);
        disconnect(this._spatializedInput, this.spatializer.input);
    }
    connectSpatializer() {
        connect(this._spatializedInput, this.spatializer.input);
        connect(this.spatializer.output, this.volumeControl);
    }
}
//# sourceMappingURL=AudioDestination.js.map