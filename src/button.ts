import { Device } from './device'

export class Button extends Device {
  constructor(pin: number) {
    super(pin, 'in')
  }
}
