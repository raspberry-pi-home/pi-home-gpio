import wiringPi, {HIGH, LOW} from 'wiringpi-node';

import Pin from './pin';
import {
    INPUT_STRING,
    OUTPUT_STRING,
    FLOATING_STRING
} from './constants';

const _PINS = {};
const GPIO_FUNCTIONS = {
    [INPUT_STRING]: wiringPi.INPUT,
    [OUTPUT_STRING]: wiringPi.OUTPUT,
};
const GPIO_PULL_UPS = {
    'up': wiringPi.PUD_UP,
    'down': wiringPi.PUD_DOWN,
    FLOATING_STRING: wiringPi.PUD_OFF,
};
let WIRING_PI = undefined;
let PI_INFO = undefined;

export default class PhysicalPin extends Pin {

    constructor(pin) {
        if (WIRING_PI === undefined) {
            wiringPi.setup('gpio');
            WIRING_PI = true;
        }

        if (PI_INFO === undefined) {
            PI_INFO = wiringPi.piBoardRev();
        }

        if (pin < 0 || pin > 54) {
            throw new Error(`Invalid pin ${pin} specified (must be 0..53)`);
        }

        if (_PINS[pin] !== undefined) {
            return _PINS[pin];
        }

        super();

        this._number = pin;
        this._function = INPUT_STRING;
        this._pull = FLOATING_STRING;

        wiringPi.pinMode(pin, wiringPi.INPUT);

        _PINS[pin] = this;

        return this;
    }

    number() {
        return this._number;
    }

    close() {
        wiringPi.pullUpDnControl(this._number, wiringPi.PUD_OFF);
    }

    outputWithState(state) {
        this._pull = FLOATING_STRING;
        this.pinFunction(OUTPUT_STRING);

        wiringPi.digitalWrite(this._number, state);
    }

    pinFunction(value) {
        if (value === undefined) {
            return this._function;
        }

        if (value !== INPUT_STRING) {
            this._pull = FLOATING_STRING;
        }

        if (value === INPUT_STRING || value === OUTPUT_STRING) {
            wiringPi.pinMode(this._number, GPIO_FUNCTIONS[value]);
            wiringPi.pullUpDnControl(this._number, GPIO_PULL_UPS[this._pull]);

            this._function = value;
        } else {
            throw new Error(`Invalid function ${value} for pin ${this._number}`);
        }
        return value;
    }

    state(value) {
        if (value === undefined) {
            return wiringPi.digitalRead(this._number);
        }
        wiringPi.digitalWrite(this._number, value ? HIGH : LOW);
        return value;
    }
}
