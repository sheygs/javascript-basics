export const buttonText = [
 'Ugh.',
 '🤦🏻‍♂️',
 'omg dad.',
 'you are the worst',
 'seriously',
 'stop it.',
 'please stop',
 'that was the worst one',
];


export function getRandomItem(arr, not){
 const item = arr[Math.floor(Math.random() * arr.length)];
 if (item === not){
   console.log('We used that one previously. check again')
   return getRandomItem(arr, not);
 }
 return item;
}