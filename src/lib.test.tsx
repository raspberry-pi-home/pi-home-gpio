const { Led, Button } = require('../lib/pi-home-gpio')

test('basic instantiation', () => {
  expect(new Led(1)).not.toBeUndefined()
  expect(new Button(1)).not.toBeUndefined()
})
