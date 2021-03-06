import fs from "fs"


export class CsvFileReader {
    private _data: string[][] = [];

    constructor(private _filename: string) {
    }

    read(): void {
        this._data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row: string): string[] => {
                return row.split(',')
            });
    }

    get data(): string[][] {
        return this._data;
    }

    set data(value: string[][]) {
        this._data = value;
    }

    get filename(): string {
        return this._filename;
    }

    set filename(value: string) {
        this._filename = value;
    }
}