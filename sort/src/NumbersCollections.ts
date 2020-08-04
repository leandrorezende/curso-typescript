import {Sorter} from "./Sorter";

export class NumbersCollections extends Sorter{
    constructor(private _data: number[]) {
        super();
    }

    get length(): number {
        return this._data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this._data[leftIndex] > this._data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this._data[leftIndex];
        this._data[leftIndex] = this._data[rightIndex];
        this._data[rightIndex] = leftHand;
    }

    get data(): number[] {
        return this._data;
    }
}
