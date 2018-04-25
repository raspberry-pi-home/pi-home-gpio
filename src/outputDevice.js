import Lock from 'rwlock';
import {HIGH, LOW} from 'wiringpi-node';

import GPIODevice from './gpioDevice';

export default class OutputDevice extends GPIODevice {

    constructor(pin, activeHigh = true, initialValue = false) {
        super(pin);

        this._lock = new Lock();

        this._activeHigh(activeHigh);

        this._pin.outputWithState(this._valueToState(initialValue));
    }

    _activeHigh(value) {
        this._activeState = value ? HIGH : LOW;
        this._inactiveState = value ? LOW : HIGH;
    }

    _valueToState(value) {
        return value ? this._activeState : this._inactiveState;
    }

    _write(value) {
        this._checkOpen(this);
        this._pin.state(this._valueToState(value));
    }

    on() {
        this._pin.stopBlink();
        this._write(true);
    }

    off() {
        this._pin.stopBlink();
        this._write(false);
    }

    value(value) {
        if (value === undefined) {
            return this._read();
        }

        this._pin.stopBlink();
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
