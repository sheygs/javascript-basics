export async function fetchJoke(loader){
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