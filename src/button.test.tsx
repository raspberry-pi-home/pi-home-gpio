import { OnOffButton, PushButton } from './button'

test('basic instantiation (onoff)', () => {
  expect(new OnOffButton(1)).not.toBeUndefined()
})

test('basic instantiation (push)', () => {
  expect(new PushButton(1)).not.toBeUndefined()
})
