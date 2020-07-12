import { Gpio } from 'onoff'
import type { BinaryValue, Direction } from 'onoff'

import { Device } from './device'

export class Led extends Device {
  constructor(pin: number) {
    super(pin, 'out')
  }

  on = (): void => this.pin.writeSync(Gpio.HIGH)

  off = (): void => this.pin.writeSync(Gpio.LOW)

  toggle = (): void => this.pin.writeSync((this.pin.readSync() ^ 1) as BinaryValue)

  value = (value?: BinaryValue): BinaryValue | void => {
    if (value !== undefined) {
      this.pin.writeSync(value)
    } else {
      return this.pin.readSync()
    }
  }
}
