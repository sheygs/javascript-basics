import { isValid } from './colours';

function logWords(results){
 console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {

  logWords(results);

  const words = results[results.length - 1][0].transcript;
  console.log(words);

  // lowercase every word
  let color = words.toLowerCase();

  // remove every space
  color = color.replace(/\s/g, '');

  // check if word is a valid color
  if (!isValid(color)) return;

  // valid color
  console.log('This is a valid color');

  // render to the UI
  const colorEl = document.querySelector(`.${color}`);
  colorEl.classList.add('got');
  document.body.style.backgroundColor = color;
}