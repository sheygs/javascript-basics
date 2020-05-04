import elements from './elements.js';
import { handleClick } from './handlers.js';
import { fetchJoke } from './lib.js';

elements.jokeButton.addEventListener('click', handleClick);

fetchJoke(elements.loader);