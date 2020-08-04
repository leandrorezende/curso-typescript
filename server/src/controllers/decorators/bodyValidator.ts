import 'reflect-metadata';
import {MetadataKeys} from './metadatakeys';

export function bodyValidator(...keys: string[]) {
    return function(target:any, key: string, desc:PropertyDescriptor){
        Reflect.defineMetadata(MetadataKeys.VALIDATOR, keys, target, key);
    }
}
