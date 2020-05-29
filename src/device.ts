import { Gpio } from 'onoff'
import type { BinaryValue, Direction } from 'onoff'

class MockDevice {
  private value: BinaryValue = 0;

  writeSync = (value: BinaryValue): void => {
    // eslint-disable-next-line no-console
    console.log(`writeSync(${value})`)

    this.value = value
  };

  readSync = (): BinaryValue => {
    // eslint-disable-next-line no-console
    console.log(`readSync => ${this.value}`)

    return this.value
  }
}

type DeviceType = Gpio | MockDevice;

export class Device {
  protected pin: DeviceType;

  constructor(pin: number, direction: Direction) {
    if (Gpio.accessible) {
      this.pin = new Gpio(pin, direction)
    } else {
      this.pin = new MockDevice()
    }
  }
}
