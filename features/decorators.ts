@classDecorator
class Boat {
    @testDecorator
    color: string = 'red';

    @testDecorator
    get formattedColor(): string {
        return `This boats color is ${this.color}`;
    }

    @logError('Oops boat was sunk in ocean')
    pilot(@parametedDecorator speed: string): void {
        //throw new Error();
        if (speed === 'fast') {
            console.log('swish');
        } else {
            console.log('nothing');
        }
    }
}

function classDecorator(constructor: typeof Boat) {
    console.log(constructor);
}

function parametedDecorator(target: any, key: string, index: number) {
    console.log(key);
    console.log(index);
}

// we can't have access direct to the value of property of the class
function testDecorator(targed: any, key: string) {
    console.log(targed);
    console.log(key);
}

function logError(errorMessage: string) {
    return function (target: any, key: string, desc: PropertyDescriptor): void {
        const method = desc.value;
        desc.value = function () {
            try {
                method();
            } catch (e) {
                console.log(errorMessage);
            }
        }
    }
}

