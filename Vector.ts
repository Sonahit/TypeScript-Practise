// Vector from codewars

class Vector {
    public startNums: number[]
    constructor(startNum: number[]) {
        this.startNums = startNum
    }
    public add(someVector: {startNums: number[]}): Vector {
        if (someVector.startNums.length !== this.startNums.length) {
            throw new Error("Vectors with different lengths!");
        }
        return new Vector(someVector.startNums.map((num: number, index: number) : number => num + this.startNums[index]));
    }
    public subtract(someVector : {startNums: number[]}): Vector {
        if (someVector.startNums.length !== this.startNums.length) {
            throw new Error("Vectors with different lengths!");
        }
        return new Vector(someVector.startNums.map((num: number, index: number): number =>  this.startNums[index] - num))
    }
    public dot(someVector: {startNums: number[]}): number {
        let d: number = 0;
        someVector.startNums.forEach((num: number, index: number): number => d += num * this.startNums[index])
        return d;
    }
    public norm(): number {
        let n: number = 0;
        this.startNums.forEach((num: number): number => n += num ** 2)
        return n;
    }
    valueOf ():number {
        return this.startNums.reduce((acc: number, num: number) => acc += num);
    }
     
}

let a: Vector = new Vector([1, 2, 3]);
let b: Vector = new Vector([3, 4, 5]);
let c: Vector = new Vector([5, 6, 7, 8]);     // should return a new Vector([4, 6, 8])
console.log(a.subtract(b)); // should return a new Vector([-2, -2, -2])
console.log(a.dot(b))   // should return 1*3 + 2*4 + 3*5 = 26
console.log(a.norm());      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
console.log(a.valueOf() + b.valueOf());
