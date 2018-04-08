import Lock from 'rwlock';

import GPIODevice from './gpioDevice';

export default class OutputDevice extends GPIODevice {

    constructor(pin, activeHigh = true, initialValue = false) {
        super(pin);

        this._lock = new Lock();

        this._activeHigh(activeHigh);

        this._pin.output_with_state(this._valueToState(initialValue));
    }

    _activeHigh(value) {
        this._activeState = value;
        this._inactiveState = !value;
    }

    _valueToState(value) {
        return value ? this._activeState : this._inactiveState;
    }

    _write(value) {
        this._checkOpen(this);
        this._pin.state(this._valueToState(value));
    }

    on() {
        this._pin._stop_blink();
        this._write(true);
    }

    off() {
        this._pin._stop_blink();
        this._write(false);
    }

    value(value) {
        if (!value) {
            return this._read();
        }

        this._pin._stop_blink();
        this._write(value);

        return value;
    }

    toggle() {
        this._lock.readLock((release) => {
            if (this.isActive()) {
                this.off();
            } else {
                this.on();
            }
            release();
        });
    }
}
