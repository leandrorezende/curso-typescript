import fs from "fs";

export abstract class CsvFileReader <T>{
    private _data: T[] = [];

    constructor(private _filename: string) {
    }

    abstract mapRow(row: string[]): T;

    read(): void {
        this._data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            })
            .map(this.mapRow);
    }

    get data(): T[] {
        return this._data;
    }

    set data(value: T[]) {
        this._data = value;
    }

    get filename(): string {
        return this._filename;
    }

    set filename(value: string) {
        this._filename = value;
    }
}