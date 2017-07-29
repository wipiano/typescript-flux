import Emitter from "./EventEmitter";
import {countUp, change} from "./Events";

export default class Store extends Emitter {
    private _count: number;

    constructor(dispatcher: Emitter) {
        super();
        this._count = 0;

        dispatcher.on(countUp, this.onCountUp);
    }

    getCount = () => {
        return this._count;
    };

    onCountUp = (count: number) => {
        this._count = count;
        this.emit(change, null);
    };
}