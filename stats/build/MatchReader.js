"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
var utils_1 = require("./utils");
var CsvFileReader_1 = require("./CsvFileReader");
var MatchReader = /** @class */ (function () {
    function MatchReader(_reader) {
        this._reader = _reader;
        this._matches = [];
    }
    MatchReader.fromCsv = function (filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    };
    MatchReader.prototype.load = function () {
        this._reader.read();
        this._matches = this._reader.data.map(function (row) {
            return [
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5],
                row[6]
            ];
        });
    };
    Object.defineProperty(MatchReader.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: false,
        configurable: true
    });
    return MatchReader;
}());
exports.MatchReader = MatchReader;
