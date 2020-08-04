class ArrayOfAnything<T> {
    constructor(public collection: T[]) {
    }

    get(index: number): T {
        return this.collection[index];
    }
}

const arr01 = new ArrayOfAnything<string>(['a', 'b', 'c']);
const arr02 = new ArrayOfAnything(['a', 'b', 'c']);

// Example of generics with functions

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(['a', 'b', 'c']);
printAnything(['a', 'b', 'c']);

// Generic Constraints

class Car {
    print() {
        console.log('I am a car');
    }
}

class House {
    print() {
        console.log('I am a house');
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}

printHousesOrCars<House>([new House(), new Car(), new Car()]);