import { convertRates } from './lib.js';
import { formatCurrency, decimalPlaceFormat } from './utils.js';
import { fromAmount, fromSelectOptions, toSelectOptions, toAmount } from './elements.js';


export async function handleInput(e){
 e.preventDefault();
 const amount = await convertRates(
  fromAmount.value, 
  fromSelectOptions.value, 
  toSelectOptions.value,
 );
 toAmount.textContent = formatCurrency(decimalPlaceFormat(amount), toSelectOptions.value);
}