import OutputDevice from './outputDevice';

export default class DigitalOutputDevice extends OutputDevice {

    constructor(pin, activeHigh = true, initialValue = false) {
        super(pin, activeHigh, initialValue);
    }

    blink(onTime, offTime, times, callback) {
        this._pin.blink(onTime, offTime, times, callback);
    }
}
