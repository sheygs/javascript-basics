const fromSelectOptions = document.querySelector('[name="from_currency"]');
const toSelectOptions = document.querySelector('[name="to_currency"]');
const endpoint = 'https://api.exchangeratesapi.io/latest'
const cache = {};

const currencies = {
 USD: 'United States Dollar',
 AUD: 'Australian Dollar',
 BGN: 'Bulgarian Lev',
 BRL: 'Brazilian Real',
 CAD: 'Canadian Dollar',
 CHF: 'Swiss Franc',
 CNY: 'Chinese Yuan',
 CZK: 'Czech Republic Koruna',
 DKK: 'Danish Krone',
 GBP: 'British Pound Sterling',
 HKD: 'Hong Kong Dollar',
 HRK: 'Croatian Kuna',
 HUF: 'Hungarian Forint',
 IDR: 'Indonesian Rupiah',
 ILS: 'Israeli New Sheqel',
 INR: 'Indian Rupee',
 JPY: 'Japanese Yen',
 KRW: 'South Korean Won',
 MXN: 'Mexican Peso',
 MYR: 'Malaysian Ringgit',
 NOK: 'Norwegian Krone',
 NZD: 'New Zealand Dollar',
 PHP: 'Philippine Peso',
 PLN: 'Polish Zloty',
 RON: 'Romanian Leu',
 RUB: 'Russian Ruble',
 SEK: 'Swedish Krona',
 SGD: 'Singapore Dollar',
 THB: 'Thai Baht',
 TRY: 'Turkish Lira',
 ZAR: 'South African Rand',
 EUR: 'Euro',
};


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




const optionsHTML = populateOptions(currencies);
fromSelectOptions.innerHTML = optionsHTML;
toSelectOptions.innerHTML = optionsHTML;