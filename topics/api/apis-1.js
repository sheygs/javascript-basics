const username = 'sheygs13';
const baseEndPoint = 'https://api.github.com'
const userEndPoint = `${baseEndPoint}/users`;
const el = document.querySelector('.user');

function handleError({ message }){
 console.log(message);
 el.textContent = `Something went wrong: ${message}`
}

async function getUser(user){
   el.textContent = 'loading...';
   const response = await fetch(`${userEndPoint}/${user}`);
   const data = await response.json();
   el.textContent = `${data.name} - ${data.company}`;
} 

getUser(username).catch(handleError);

