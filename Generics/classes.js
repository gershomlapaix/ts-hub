var Stack = /** @class */ (function () {
    function Stack(size) {
        this.size = size;
        this.elements = [];
    }
    Stack.prototype.isEmpty = function () {
        return this.elements.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.elements.length == this.size;
    };
    Stack.prototype.push = function (elem) {
        if (this.isFull()) {
            throw new Error("Stack overflow.");
        }
        this.elements.push(elem);
    };
    Stack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("The stack is empty. Please insert some elements first.");
        }
        return this.elements.pop();
    };
    return Stack;
}());
var numbers = new Stack(5);
function randBetween(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
while (!numbers.isFull()) {
    var n = randBetween(1, 10);
    console.log("Push ".concat(n, " into the stack."));
    numbers.push(n);
}
while (!numbers.isEmpty()) {
    var n = numbers.pop();
    console.log("Pop ".concat(n, " from the stack."));
}
