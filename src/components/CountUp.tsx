import * as React from "react";
import ActionCreator from "../ActionCreator";
import Store from "../Store";
import EventEmitter from "../EventEmitter";
import {change} from "../Events";

export default class CountUp extends React.Component<CountUpProps, CountUpState> {
    private _dispacher: EventEmitter;
    private _action: ActionCreator;
    private _store: Store;

    constructor(props: CountUpProps) {
        super(props);

        this._dispacher = new EventEmitter();
        this._action = new ActionCreator(this._dispacher);
        this._store = new Store(this._dispacher);

        this.state = {count: this._store.getCount()};

        this._store.on(change, () => {
            this.onChange();
        });
    }

    onChange = () => {
        this.setState({count: this._store.getCount()});
    };

    tick = () => {
        this._action.countUp(this.state.count + 1);
    };

    render() {
        return (
            <div>
                <button onClick={this.tick}>Count Up</button>

                <p>
                    Count: {this.state.count}
                </p>
            </div>
        )
    };
}

class CountUpProps {

}

class CountUpState {
    count: number;
}
