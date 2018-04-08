import DigitalOutputDevice from './digitalOutputDevice';

export default class Led extends DigitalOutputDevice {

    constructor(pin, activeHigh = true, initialValue = false) {
        super(pin, activeHigh, initialValue);
    }
}
