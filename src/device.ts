import { Gpio } from 'onoff'
import type { BinaryValue, Direction, Edge, Options, ValueCallback } from 'onoff'

class MockDevice {
  private value: BinaryValue = 0

  writeSync = (value: BinaryValue): void => {
    if (process.env.DEBUG === 'true') {
      // eslint-disable-next-line no-console
      console.log(`writeSync(${value})`)
    }

    this.value = value
  }

  readSync = (): BinaryValue => {
    if (process.env.DEBUG === 'true') {
      // eslint-disable-next-line no-console
      console.log(`readSync => ${this.value}`)
    }

    return this.value
  }

  watch = (callback: ValueCallback): void => {
    if (process.env.DEBUG === 'true') {
      // eslint-disable-next-line no-console
      console.log('watch')
    }

    callback(null, this.value)
  }
}

type DeviceType = Gpio | MockDevice

export class Device {
  protected _pin: DeviceType

  constructor(pin: number, direction: Direction, edge?: Edge, options?: Options) {
    if (Gpio.accessible) {
      this._pin = new Gpio(pin, direction, edge, options)
    } else {
      this._pin = new MockDevice()
    }
  }
}
