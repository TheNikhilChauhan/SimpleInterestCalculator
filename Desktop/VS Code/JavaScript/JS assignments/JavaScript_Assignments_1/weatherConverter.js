let celsius = 37;
let farenheit;
const changeToFahrenheit = () => {
    farenheit = (celsius * 1.8 + 32);
    console.log(`${farenheit}\u00B0 Farenheit`);
}

changeToFahrenheit();