import wiringPi, {HIGH, LOW} from 'wiringpi-node';

import Pin from './pin';

const _PINS = {};
const GPIO_FUNCTIONS = {
    'input': wiringPi.INPUT,
    'output': wiringPi.OUTPUT,
    'pwm': wiringPi.PWM_OUTPUT,
};
const GPIO_PULL_UPS = {
    'up': wiringPi.PUD_UP,
    'down': wiringPi.PUD_DOWN,
    'floating': wiringPi.PUD_OFF,
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
        this._pwm = undefined;
        this._frequency = undefined;
        this._dutyCycle = undefined;
        this._bounce = -666;
        this._whenChanged = undefined;
        this._function = 'input';
        this._state = false;
        this._pull = 'floating';
        this._bounce = undefined;
        this._edges = 'both';

        wiringPi.pinMode(pin, wiringPi.INPUT);

        _PINS[pin] = this;

        return this;
    }

    number() {
        return this._number;
    }

    close() {
        this._frequency = undefined;
        this._whenChanged = undefined;

        wiringPi.pullUpDnControl(this._number, wiringPi.PUD_OFF);
    }

    outputWithState(state) {
        this._pull = 'floating';
        this.pinFunction('output');

        wiringPi.digitalWrite(this._number, state);
    }

    pinFunction(value) {
        if (value === undefined) {
            return this._function;
        }

        if (value !== 'input') {
            this._pull = 'floating';
        }

        if (value === 'input' || value === 'output') {
            wiringPi.pinMode(this._number, GPIO_FUNCTIONS[value]);
            wiringPi.pullUpDnControl(this._number, GPIO_PULL_UPS[this._pull]);

            this._function = value;
        } else {
            throw new Error(`invalid function ${value} for pin ${this._number}`);
        }
        return value;
    }

    state(value) {
        if (value === undefined) {
            if (this._pwm !== undefined) {
                return this._dutyCycle;
            }
            return wiringPi.digitalRead(this._number);
        }
        if (this._pwm !== undefined) {
            wiringPi.pwmWrite(this._number, value);

            this._dutyCycle = value;
        } else {
            wiringPi.digitalWrite(this._number, value ? HIGH : LOW);
        }
        return value;
    }

    toString() {
        return `GPIO ${this._number.toString()}`;
    }
}
