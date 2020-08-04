import {Sorter} from "./Sorter";

export class CharactersCollections extends Sorter{
    constructor(private _data: string) {
        super();
    }

    get length(): number {
        return this._data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this._data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this._data.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this._data = characters.join('');
    }

    get data(): string {
        return this._data;
    }
}