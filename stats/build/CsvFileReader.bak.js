"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(_filename) {
        this._filename = _filename;
        this._data = [];
    }
    CsvFileReader.prototype.read = function () {
        this._data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map(function (row) {
            return row.split(',');
        })
            .map(function (row) {
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
    Object.defineProperty(CsvFileReader.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (value) {
            this._data = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CsvFileReader.prototype, "filename", {
        get: function () {
            return this._filename;
        },
        set: function (value) {
            this._filename = value;
        },
        enumerable: false,
        configurable: true
    });
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
