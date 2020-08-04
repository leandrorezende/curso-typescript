const add = (a: number, b: number) => {
    return a + b;
};

const subtract = (a: number, b: number) => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function multiply(a: number, b: number): number {
    return a * b;
}

const looger = (message: string): void => {
    console.log(message);
}

// never: tells that will never react the end of the function
const throwError = (message: string): never => {
    throw new Error(message);
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: { date: Date, weather: String }): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);