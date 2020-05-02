import biodata from './handlers.js';
import * as data from './data.js';

function displayMessage(msg, name, occupation){
 return `${msg}
 By: ${name}
 Occupation: ${occupation}
 `;
};

const message = displayMessage(`Pi  is the ratio of the circle's circumference to its diameter`, biodata.name, biodata.occupation);
console.log(message);

document.querySelector('button').addEventListener('click', biodata.handleClick)