import { Led } from './led'

test('basic instantiation', () => {
  expect(new Led(1)).not.toBeUndefined()
})

test('basic interaction', () => {
  const led = new Led(1)
  expect(led.value()).toEqual(0)

  led.on()
  expect(led.value()).toEqual(1)

  led.off()
  expect(led.value()).toEqual(0)

  led.toggle()
  expect(led.value()).toEqual(1)

  led.toggle()
  expect(led.value()).toEqual(0)

  led.value(1)
  expect(led.value()).toEqual(1)

  led.value(0)
  expect(led.value()).toEqual(0)
})
