import { Gpio } from 'onoff'
import type { BinaryValue, Direction } from 'onoff'

import { Device } from './device'

export class Led extends Device {
  constructor(pin: number) {
    super(pin, 'out')
  }

  on = (): void => this._pin.writeSync(Gpio.HIGH)

  off = (): void => this._pin.writeSync(Gpio.LOW)

  toggle = (): void => this._pin.writeSync((this._pin.readSync() ^ 1) as BinaryValue)

  value = (value?: BinaryValue): BinaryValue | void => {
    if (value !== undefined) {
      this._pin.writeSync(value)
    } else {
      return this._pin.readSync()
    }
  }
}
