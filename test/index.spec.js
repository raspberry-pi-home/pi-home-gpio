import gpio from '../src/index';

describe('pi-home-gpio', () => {
    describe('when I importing the library', () => {
        test('should return the main function', () => {
            expect(gpio).toBeDefined();
        });
    });
});
