import { TypedEventBase } from "../events/EventBase";
import { lerp } from "../math/lerp";
export class TimerTickEvent extends Event {
    t = 0;
    dt = 0;
    sdt = 0;
    constructor() {
        super("tick");
        Object.seal(this);
    }
    copy(evt) {
        this.t = evt.t;
        this.dt = evt.dt;
        this.sdt = evt.sdt;
    }
    set(t, dt) {
        this.t = t;
        this.dt = dt;
        this.sdt = lerp(this.sdt, dt, 0.01);
    }
}
export class BaseTimer extends TypedEventBase {
    _timer = null;
    _onTick;
    _frameTime = Number.MAX_VALUE;
    _targetFPS = 0;
    constructor(targetFrameRate) {
        super();
        this.targetFrameRate = targetFrameRate;
        const tickEvt = new TimerTickEvent();
        let lt = -1;
        let dt = 0;
        this._onTick = (t) => {
            if (lt > 0) {
                tickEvt.t = t;
                tickEvt.dt = t - lt;
                tickEvt.sdt = tickEvt.dt;
                dt = t - lt;
                tickEvt.set(t, dt);
                this.dispatchEvent(tickEvt);
            }
            lt = t;
        };
    }
    restart() {
        this.stop();
        this.start();
    }
    get isRunning() {
        return this._timer != null;
    }
    stop() {
        this._timer = null;
        this.dispatchEvent(new Event("stopped"));
    }
    get targetFrameRate() {
        return this._targetFPS;
    }
    set targetFrameRate(fps) {
        this._targetFPS = fps;
        this._frameTime = 1000 / fps;
    }
}
//# sourceMappingURL=BaseTimer.js.map