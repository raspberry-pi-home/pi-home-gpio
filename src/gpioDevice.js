import Lock from 'rwlock';

import Device from './device';
import PhysicalPin from './physicalPin';

export default class GPIODevice extends Device {

    constructor(pin) {
        super();

        this._PINS = new Set();
        this._PINS_LOCK = new Lock();

        let physicalPin;

        if (!pin) {
            throw new Error('No pin given');
        }
        if (Number.isInteger(pin)) {
            physicalPin = new PhysicalPin(pin);
        }

        this._PINS_LOCK.readLock((release) => {
            if (this._PINS.has(physicalPin)) {
                throw new Error(`pin ${pin.toString()} is already in use by another gpiozero object`);
            }
            this._PINS.add(physicalPin);
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
        this._PINS_LOCK.readLock((release) => {
            const pin = this._pin;

            if (this._PINS.has(pin)) {
                this._PINS.delete(pin);
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

    toString() {
        return `<gpiozero.GPIODevice object on pin ${this._pin._number.toString()} isActive=${this.isActive()}>`;
    }
}
