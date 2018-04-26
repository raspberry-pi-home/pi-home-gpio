import Lock from 'rwlock';

import Device from './device';
import PhysicalPin from './physicalPin';

const _PINS = new Set();
const _PINS_LOCK = new Lock();

export default class GPIODevice extends Device {

    constructor(pin) {
        super();

        let physicalPin;

        if (!pin) {
            throw new Error('No pin given');
        }

        if (Number.isInteger(pin)) {
            physicalPin = new PhysicalPin(pin);
        }

        _PINS_LOCK.readLock((release) => {
            if (_PINS.has(physicalPin)) {
                throw new Error(`Pin ${pin} is already in use by another gpiozero object`);
            }
            _PINS.add(physicalPin);
            release();
        });

        this._pin = physicalPin;
        this._activeState = true;
        this._inactiveState = false;
    }

    _read() {
        this._checkOpen();
        return this._stateToValue(this.pin().state());
    }

    _stateToValue(state) {
        return Boolean(state === this._activeState);
    }

    close() {
        _PINS_LOCK.readLock((release) => {
            const pin = this._pin;

            if (_PINS.has(pin)) {
                _PINS.delete(pin);
                this._pin.close();
            }
            this._pin = undefined;
            release();
        });
    }

    closed() {
        return (this._pin === undefined);
    }

    pin() {
        return this._pin;
    }

    value() {
        return this._read();
    }

    isActive() {
        return Boolean(this.value());
    }
}
