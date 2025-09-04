export class Event {
    constructor(type, data, background = null) {
        this.type = type;
        this.data = data;
        this.background = background;
    }
}