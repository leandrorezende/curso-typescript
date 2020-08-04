import 'reflect-metadata';

@printMetadata
class Plane {
    color: string = 'red';

    @markFunction('HI THERE')
    fly(): void {
        console.log('vrrrr');
    }
}

function markFunction(secretInfo: string) {
    return function (target: Plane, key: string) {
        Reflect.defineMetadata('secret', secretInfo, target, key);
    };
}

function printMetadata(target: typeof Plane) {
    for (let key in target.prototype) {
        const secret = Reflect.getMetadata('secret', target.prototype, key);
        console.log(secret);
    }
}


// const plane = {
//     color: 'red'
// };

// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('hight', 10, plane);
//
// const note = Reflect.getMetadata('note', plane);
// const hight = Reflect.getMetadata('hight', plane);
//
// console.log(note);
// console.log(hight);


// Reflect.defineMetadata('colorNote', 'hi there', plane, 'color');
// const colorNote = Reflect.getMetadata('colorNote', plane, 'color');
// console.log(colorNote);