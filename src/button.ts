import type { BinaryValue } from 'onoff'

import { Device } from './device'

type Type = 'onoff' | 'push'

class Button extends Device {
  private buttonType: Type

  constructor(pin: number, buttonType: Type) {
    super(pin, 'in', buttonType === 'push' ? 'rising' : 'both', buttonType === 'push' ? { debounceTimeout: 100 } : undefined)

    this.buttonType = buttonType
  }

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

export class OnOffButton extends Button {
  constructor(pin: number) {
    super(pin, 'onoff')
  }
}

export class PushButton extends Button {
  constructor(pin: number) {
    super(pin, 'push')
  }
}
