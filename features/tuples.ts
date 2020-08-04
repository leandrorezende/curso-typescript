const drink = {
    color: 'brow',
    carbonate: true,
    sugar: 40
};

type Drink = [string, boolean, number];
const pespsi: Drink = ['brow', true, 40];
// pespsi[0] = 40; the tuple doesn't allow us to put a diffente type
const sprite: Drink = ['clear', true, 40];


const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsepower: 400,
    weight: 3354
};