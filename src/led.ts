import { Gpio } from 'onoff'
import type { BinaryValue, Direction } from 'onoff'

import { Device } from './device'

export class Led extends Device {
  constructor(pin: number) {
    super(pin, 'out')
  }

  on = () => this.pin.writeSync(Gpio.HIGH)

  off = () => this.pin.writeSync(Gpio.LOW)

  toggle = () => this.pin.writeSync((this.pin.readSync() ^ 1) as BinaryValue)

  value = (value?: BinaryValue): BinaryValue | void => {
    if (value !== undefined) {
      this.pin.writeSync(value)
    } else {
      return this.pin.readSync()
    }
  }
}
