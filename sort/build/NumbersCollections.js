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
exports.NumbersCollections = void 0;
var Sorter_1 = require("./Sorter");
var NumbersCollections = /** @class */ (function (_super) {
    __extends(NumbersCollections, _super);
    function NumbersCollections(_data) {
        var _this = _super.call(this) || this;
        _this._data = _data;
        return _this;
    }
    Object.defineProperty(NumbersCollections.prototype, "length", {
        get: function () {
            return this._data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollections.prototype.compare = function (leftIndex, rightIndex) {
        return this._data[leftIndex] > this._data[rightIndex];
    };
    NumbersCollections.prototype.swap = function (leftIndex, rightIndex) {
        var leftHand = this._data[leftIndex];
        this._data[leftIndex] = this._data[rightIndex];
        this._data[rightIndex] = leftHand;
    };
    Object.defineProperty(NumbersCollections.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: false,
        configurable: true
    });
    return NumbersCollections;
}(Sorter_1.Sorter));
exports.NumbersCollections = NumbersCollections;
