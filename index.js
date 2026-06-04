
// ES6 module
import getPosts, {getPostLength} from "./postControls.js";

console.log(getPosts());
console.log(`Post Lenght: ${getPostLength()}`);




// // Common ES module
// const {generateRandomNumber, celciusToFehrenheit} = require('./utils.js');

// console.log(`Generate Random Number: ${generateRandomNumber()}`);

// const celcius = 32;
// console.log(`${celcius}°C -> Fehrenheit: ${celciusToFehrenheit(celcius)}`);