const carMarkers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [
    ['f150', 'fiesta'],
    ['corolla'],
    ['camaro']
]

// Help with inference when extractin values
const car = carMarkers[0];
const myCar = carMarkers.pop();

// Prevent incompatible values
//carMarkers.push(100);

// Help with 'map'
carMarkers.map((car: string) => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2019-10-10'];
importantDates.push('2019-10-11');
importantDates.push(new Date());