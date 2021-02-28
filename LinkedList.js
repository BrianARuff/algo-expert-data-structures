var LinkedList = /** @class */ (function () {
    function LinkedList(value) {
        var _this = this;
        this.setNextNode = function (value) {
            _this._nextNode = new LinkedList(value);
        };
        this.getNextNode = function () {
            return _this._nextNode;
        };
        this._value = value;
        this._nextNode;
    }
    return LinkedList;
}());
var LL1 = new LinkedList(1);
LL1.setNextNode(2);
console.log(LL1);
