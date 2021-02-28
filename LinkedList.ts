class LinkedList {
    public _value: number;
    public _nextNode: LinkedList

    constructor(value) {
        this._value = value
        this._nextNode;
    }

    public setNextNode: Function = (value: number) => {
        this._nextNode = new LinkedList(value);
    }

    public getNextNode: Function = (): LinkedList => {
        return this._nextNode
    }
}

const LL1 = new LinkedList(1);
LL1.setNextNode(2)
console.log(LL1);