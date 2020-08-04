import 'reflect-metadata';
import {Methods} from './methods';
import {MetadataKeys} from './metadatakeys';
import {RequestHandler} from "express";

interface RouteHandlerDescriptor extends PropertyDescriptor{
    value?: RequestHandler
}

function routeBinder(method: string) {
    return function (path: string) {
        return function (target: any, key: string, desc: RouteHandlerDescriptor) {
            Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
            Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
        }
    }
}

export const get = routeBinder(Methods.GET);
export const put = routeBinder(Methods.PUT);
export const post = routeBinder(Methods.POST);
export const del = routeBinder(Methods.DEL);
export const patch = routeBinder(Methods.PATCH);
