import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";
import {MatchData} from "./MatchData";
import {CsvFileReader} from "./CsvFileReader";

interface DataReader {
    data: string[][];

    read(): void;

}

export class MatchReader {
    static fromCsv(filename: string): MatchReader {
        return new MatchReader(new CsvFileReader(filename));
    }

    private _matches: MatchData[] = [];

    constructor(public _reader: DataReader) {
    }

    load(): void {
        this._reader.read();
        this._matches = this._reader.data.map(
            (row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[3]),
                    parseInt(row[4]),
                    row[5] as MatchResult,
                    row[6]
                ];
            });
    }

    get matches(): MatchData[] {
        return this._matches;
    }
}