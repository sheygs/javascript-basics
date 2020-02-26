const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

function logTopping(topping, index, array){
  const previousTopping = array[index - 1];
  const nextTopping = array[index + 1];

 // log the prev topping
 previousTopping ? console.log(previousTopping) : null;

 //log the topping
 console.log(topping);

 // log the next topping
 nextTopping ? console.log(nextTopping) : null;

 //reached the last topping ?
 index === array.length - 1 ? 
           console.log('goodbye 👋')
           : 
           console.log('Loading the next topping...')

 console.log('-------break ↔️-------');
}

toppings.forEach(logTopping);