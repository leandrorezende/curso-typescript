"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = void 0;
require("reflect-metadata");
var metadatakeys_1 = require("./metadatakeys");
function bodyValidator() {
    var keys = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        keys[_i] = arguments[_i];
    }
    return function (target, key, desc) {
        Reflect.defineMetadata(metadatakeys_1.MetadataKeys.VALIDATOR, keys, target, key);
    };
}
exports.bodyValidator = bodyValidator;
