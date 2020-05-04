import { currencies } from './utils.js';
import { handleInput } from './handlers.js';
import { fromSelectOptions, toSelectOptions, form } from './elements.js';


const endpoint = 'https://api.exchangeratesapi.io/latest';
const cache = {};

function populateOptions(options){
 return Object.entries(options).map(([currencyCode, currency]) => {
    return `<option value=${currencyCode}>${currencyCode} - ${currency}</option>`;
 }).join('');
}


async function fetchRates(base='CAD'){
 const response = await fetch(`${endpoint}?base=${base}`);
 const rates = await response.json();
 return rates;
}


async function convertRates(amount, fromCurrency, toCurrency){
  // first check the cache if we have rates to convert from that currency
  if (!cache[fromCurrency]){
     console.info(`${fromCurrency} to be converted to ${toCurrency} not in cache.`);
     // fetch currency
     const rates = await fetchRates(fromCurrency);
      // store in cache for next time
     cache[fromCurrency] = rates;
  }

    const rate = cache[fromCurrency].rates[toCurrency];
    // convert the amount that they passed in
    const convertedAmount = amount * rate;
  
  return convertedAmount;
}


function init(){
 const optionsHTML = populateOptions(currencies);
 fromSelectOptions.innerHTML = optionsHTML;
 toSelectOptions.innerHTML = optionsHTML;

 // listen for multiple input elements 
 // on a form using 'input' event
 // 'change' event works too
 form.addEventListener('input', handleInput);
}

export { fetchRates, convertRates, init }