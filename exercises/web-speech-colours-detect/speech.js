import { handleResult } from './handlers';
import { colorsByLength, isDark } from './colours';


const colorsEl = document.querySelector('.colors');

function displayColors(colors){
  return colors.map(color => `<span class="color ${color} ${isDark(color) ? 'dark' : ''}" style="background:${color}">${color}</span>`).join(''); 
}  

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {

 // check for browser supports
 if (!('SpeechRecognition' in window) || !window.hasOwnProperty('SpeechRecognition')){
   alert('Sorry your browser does not support speech recogntion');
   return;
 }
 console.log('Starting...');

 // create a new speech recognition
 const recognition = new SpeechRecognition();

 // continually look for speech recognition
 recognition.continuous = true;

 // look for results as one speaks
 recognition.interimResults = true;

 // listen for recognition event
 // approach is quite different as it
 // does not have .addEventListener() in its
 // prototype.
 // `onresult` property of the SpeechRecogntion represents an event // handler that will run when the speech recogntion service returns
 // a result.
 recognition.onresult = handleResult;

 // start the speech recognition service listening to
 // incoming audio
 recognition.start();
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);