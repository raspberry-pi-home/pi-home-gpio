import { PushButton, ToggleButton } from './button'

test('basic instantiation (push)', () => {
  expect(() => new PushButton(1)).not.toThrow()
})

test('basic instantiation (toggle)', () => {
  expect(() => new ToggleButton(1)).not.toThrow()
})
