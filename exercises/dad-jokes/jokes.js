const jokeButton = document.querySelector('.getJoke');
const jokeButtonSpan = jokeButton.querySelector('.jokeText');
const jokeHolder = document.querySelector('.joke p');
const loader = document.querySelector('.loader');

const buttonText = [
 'Ugh.',
 '🤦🏻‍♂️',
 'omg dad.',
 'you are the worst',
 'seriously',
 'stop it.',
 'please stop',
 'that was the worst one',
];

async function fetchJoke(){
  // turn loader on
  loader.classList.remove('hidden');
  const fetchOption  = {
    method: 'GET',
    headers: {
     Accept: 'application/json'
    } 
  }
  const response = await fetch('https://icanhazdadjoke.com', fetchOption);
  const data = await response.json();
  // turn the loader off
  loader.classList.add('hidden');
  return data;
}

 function getRandomItem(arr, not){
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not){
    console.log('We used that one previously. check again')
    return getRandomItem(arr, not);
  }
  return item;
 }

async function handleClick(){
  const { joke } = await fetchJoke();
  jokeHolder.innerText = joke;
  jokeButtonSpan.textContent = getRandomItem(buttonText,jokeButtonSpan.textContent);
}


jokeButton.addEventListener('click', handleClick);


fetchJoke();