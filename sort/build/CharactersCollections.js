"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
var Sorter_1 = require("./Sorter");
var CharactersCollections = /** @class */ (function (_super) {
    __extends(CharactersCollections, _super);
    function CharactersCollections(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    Object.defineProperty(CharactersCollections.prototype, "length", {
        get: function () {
            return this._data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this._data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    };
    CharactersCollections.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this._data.split('');
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this._data = characters.join('');
    };
    Object.defineProperty(CharactersCollections.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return CharactersCollections;
}(Sorter_1.Sorter));
exports.CharactersCollections = CharactersCollections;
