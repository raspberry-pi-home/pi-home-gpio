export default class Device {

    _checkOpen() {
        if (this.closed()) {
            throw new Error('Device is closed or uninitialized');
        }
    }

    isActive() {
        return (this.value !== undefined);
    }

    value() {
        throw new Error('Not Implemented');
    }

    close() {
        return;
    }
}
