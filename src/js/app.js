export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if(this.members.has(character)) {
            throw new Error('Данный персонаж уже есть в команде');
        }
        this.members.add(character);
    }
    addAll(...character) {
        this.members.add(...character);
    }
    toArray() {
        return Array.from(this.members);
    }
}