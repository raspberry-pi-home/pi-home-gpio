import OutputDevice from './outputDevice';

const noop = () => ({});

export default class DigitalOutputDevice extends OutputDevice {

    blink(onTime = 1, offTime = 1, times = 1, callback = noop) {
        this._pin.blink(onTime, offTime, times, callback);
    }
}
