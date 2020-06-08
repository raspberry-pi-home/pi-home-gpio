# pi-home-gpio

![Node.js CI](https://github.com/raspberry-pi-home/pi-home-gpio/workflows/Node.js%20CI/badge.svg)

## Usage

```
npm install --save https://github.com/raspberry-pi-home/pi-home-gpio.git
```

```
import { Led } from 'pi-home-gpio'

const led = new Led(17)

led.on()
setTimeout(_ => led.off(), 1000)
```

```
import { OnOffButton, Led } from 'pi-home-gpio'

const led = new Led(17)
const button = new OnOffButton(4)

button.onAction(led.value)
```

```
import { PushButton, Led } from 'pi-home-gpio'

const led = new Led(17)
const button = new PushButton(4)

button.onAction(led.toggle)
```

## Documentation

### Led(pin) {
Creates a new Led component which is actually a digital output

#### on()
Turns on the Led

#### off()
Turns off the Led

#### toggle()
Toggle the status of the Led

#### value([value (0|1)])
Set the given value to the Led, if *value* is not provided it will return the current status
If provided, *value* must be either `1` or `0`
