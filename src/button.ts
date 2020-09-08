import type { BinaryValue } from 'onoff'

import { Device } from './device'

class Button extends Device {
  onAction = (callback: (value: BinaryValue) => void): void => {
    this._pin.watch((err, value) => {
      if (process.env.DEBUG === 'true') {
        // eslint-disable-next-line no-console
        console.log(`button.watch(${err}, ${value})`)

      }
      callback(value)
    })
  }
}

export class PushButton extends Button {
  constructor(pin: number) {
    super(pin, 'in', 'rising', { debounceTimeout: 10 })
  }
}

export class ToggleButton extends Button {
  constructor(pin: number) {
    super(pin, 'in', 'both')
  }
}
