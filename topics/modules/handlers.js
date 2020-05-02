const name = 'Olusegun Ekoh';
const occupation = 'Software Developer';

async function handleClick(event){
const { localCurrency, default:currencies } = await import('./utils.js');
 console.log(localCurrency, currencies);
}

export default {
 name,
 occupation,
 handleClick
}

