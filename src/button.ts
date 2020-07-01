import type { BinaryValue } from 'onoff'

import { Device } from './device'

type Type = 'onoff' | 'push'

class Button extends Device {
  private buttonType: Type

  constructor(pin: number, buttonType: Type) {
    super(pin, 'in', buttonType === 'push' ? 'rising' : 'both', buttonType === 'push' ? { debounceTimeout: 10 } : undefined)

    this.buttonType = buttonType
  }

  onAction = (callback: (value?: BinaryValue) => void): void => {
    if (this.buttonType === 'push') {
      this.pin.watch(() => callback())
    } else {
      this.pin.watch((err, value) => callback(value))
    }
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
