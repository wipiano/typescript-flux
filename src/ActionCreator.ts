import Emitter from "./EventEmitter";
import {countUp} from "./Events";

export default class ActionCreator {
    private _dispacher: Emitter;

    constructor(dispacher: Emitter) {
        this._dispacher = dispacher;
    }

    countUp = (data: number) => {
        this._dispacher.emit(countUp, data);
    };
}