// Vector from codewars
var Vector = /** @class */ (function () {
    function Vector(startNum) {
        this.startNums = startNum;
    }
    Vector.prototype.add = function (someVector) {
        var _this = this;
        if (someVector.startNums.length !== this.startNums.length) {
            throw new Error("Vectors with different lengths!");
        }
        return new Vector(someVector.startNums.map(function (num, index) { return num + _this.startNums[index]; }));
    };
    Vector.prototype.subtract = function (someVector) {
        var _this = this;
        if (someVector.startNums.length !== this.startNums.length) {
            throw new Error("Vectors with different lengths!");
        }
        return new Vector(someVector.startNums.map(function (num, index) { return _this.startNums[index] - num; }));
    };
    Vector.prototype.dot = function (someVector) {
        var _this = this;
        var d = 0;
        someVector.startNums.forEach(function (num, index) { return d += num * _this.startNums[index]; });
        return d;
    };
    Vector.prototype.norm = function () {
        var n = 0;
        this.startNums.forEach(function (num) { return n += Math.pow(num, 2); });
        return n;
    };
    Vector.prototype.valueOf = function () {
        return this.startNums.reduce(function (acc, num) { return acc += num; });
    };
    return Vector;
}());
var a = new Vector([1, 2, 3]);
var b = new Vector([3, 4, 5]);
var c = new Vector([5, 6, 7, 8]); // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b)); // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm()); // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
// console.log(a.add(c));
console.log(a.valueOf() + b.valueOf());
