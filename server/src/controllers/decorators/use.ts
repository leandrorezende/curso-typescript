import 'reflect-metadata';
import {RequestHandler} from "express";
import {MetadataKeys} from './metadatakeys';

export function use(middleware: RequestHandler) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
        const middlewares = Reflect.getMetadata(
            MetadataKeys.MIDDLEWARE,
            target,
            key
        ) || [];

        middlewares.push(middleware);
        Reflect.defineMetadata(
            MetadataKeys.MIDDLEWARE,
            // copia os valores do array e adicona um novo item
            [...middlewares, middleware],
            target,
            key
        );
    }
}