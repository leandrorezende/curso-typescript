"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
var methods_1 = require("./methods");
var metadatakeys_1 = require("./metadatakeys");
function routeBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(metadatakeys_1.MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(metadatakeys_1.MetadataKeys.METHOD, method, target, key);
        };
    };
}
exports.get = routeBinder(methods_1.Methods.GET);
exports.put = routeBinder(methods_1.Methods.PUT);
exports.post = routeBinder(methods_1.Methods.POST);
exports.del = routeBinder(methods_1.Methods.DEL);
exports.patch = routeBinder(methods_1.Methods.PATCH);
