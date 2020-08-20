// Vector from codewars

class Vector {

    constructor(public startNums: number[]) {}

    public add(vector: Vector): Vector {
        if (vector.startNums.length !== this.startNums.length) {
            throw new Error("Vectors length are not same");
        }

        return new Vector(vector.startNums.map((num, index) => num + this.startNums[index]));
    }

    public subtract(vector : Vector): Vector {
        if (vector.startNums.length !== this.startNums.length) {
            throw new Error("Vectors with different lengths!");
        }

        return new Vector(vector.startNums.map((num, index) =>  this.startNums[index] - num));
    }

    public dot(vector: Vector): number {
        return vector.startNums.reduce((acc, num, index) => acc += num * this.startNums[index], 0);
    }

    public norm(): number {
        return this.startNums.reduce((acc, num) => acc += num ** 2, 0);
    }

    valueOf(): number {
        return this.startNums.reduce((acc, num) => acc += num, 0);
    }
}
