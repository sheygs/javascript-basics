import { fetchJoke } from './lib.js';
import elements from './elements.js';
import { buttonText, getRandomItem } from './utils.js';

export async function handleClick(){
 const { joke } = await fetchJoke(elements.loader);
 elements.jokeHolder.innerText = joke;
 elements.jokeButtonSpan.textContent = getRandomItem(buttonText,elements.jokeButtonSpan.textContent);
}

