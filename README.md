# pi-home-gpio

![Node.js CI](https://github.com/raspberry-pi-home/pi-home-gpio/workflows/Node.js%20CI/badge.svg)

## Usage

```
npm install --save https://github.com/raspberry-pi-home/pi-home-gpio.git
```

```
import {Led} from 'pi-home-gpio';

const led = new Led(17);

led.on();
setTimeout(() => {
    led.off();
}, 1000);
```

## Documentation

### Led(pin, [activeHigh = true, initialValue = false]) {
Creates a new Led component which is actually a digital output

#### on()
Turns on the Led

#### off()
Turns off the Led

#### toggle()
Toggle the status of the Led

#### blink([onTime = 1, offTime = 1, times = 1, callback = noop])
Blinks the Led *n* times using *onTime* and *offTime* intervals and execute the *callback* when all it's done

#### value([value])
Set the given value to the Led, if *value* is not provided it will return the current status
If provided, *value* must be either `true` or `false`

#### isActive()
Returns the status of the Led represented on a *Boolean*

#### close()
Close the current Led returning it to initial state and make it unusable

#### closed()
Returns a *Boolean* value that tells you if the Led is open or not

#### pin()
Returns the pin number you set when you create the Led
