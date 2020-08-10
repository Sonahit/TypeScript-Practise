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

