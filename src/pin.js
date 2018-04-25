const noop = () => ({});

export default class Pin {

    constructor() {
        this._blinkTimer = undefined;
    }

    close() {
        this.stopBlink();
    }

    outputWithState(state) {
        this._function = 'output';
        this.state(state);
    }

    pinFunction(value) {
        if (value === undefined) {
            return 'input';
        }
        if (value !== 'input') {
            throw new Error(`Cannot set the function of pin ${this} to ${value}`);
        }
        return value;
    }

    state(value) {
        if (!value) {
            return 0;
        }
        throw new Error(`Cannot set the state of input pin ${this}`);
    }

    blink(onTime = 1, offTime = 1, times = 1, callback = noop) {
        let onTimeMilliSeconds = onTime * 1000;
        let offTimeMilliSeconds = offTime * 1000;
        let numberOfBlinks = times;

        this.stopBlink();

        this._blinkTimer = setInterval(() => {
            if (numberOfBlinks > 0) {
                this.state(true);

                setTimeout(() => {
                    this.state(false);
                    numberOfBlinks--;
                }, onTimeMilliSeconds);
            } else {
                this.stopBlink();

                if (callback !== undefined) {
                    callback();
                }
            }
        }, (onTimeMilliSeconds + offTimeMilliSeconds));

        this.state(true);

        setTimeout(() => {
            this.state(false);
            numberOfBlinks--;
        }, onTimeMilliSeconds);
    }

    stopBlink() {
        if (this._blinkTimer) {
            clearInterval(this._blinkTimer);
            this._blinkTimer = undefined;
        }
    }

    toString() {
        return 'Abstract pin';
    }
}
