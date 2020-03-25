function makePizza(toppings = ['hot dog']){
 return new Promise((resolve, reject) => {
  if (toppings.includes('pineapple')){
   reject(new Error('push out pineapple from toppings object'))
  }
  const timeToBake = 500 + (toppings.length * 200);
    setTimeout(() => {
      resolve(`Here is your 🍕 with toppings ${toppings.join(' ')}`);
    }, timeToBake);
 });
}

/* promise chaining */

 makePizza(['pepperoni'])
.then(function(pizza){
    console.log(pizza);
    return makePizza(['Ham', 'Cheese']);
 })
 .then(function(pizza){
    console.log(pizza);
    return makePizza(['hot peppers', 'onions', 'feta', 'pineapple']);
  })
  .then(function(pizza){
     console.log(pizza);
  })
  .catch(function({ message }){
      console.error(message);
  })


  /* handling Errors */

function handleError({ message }){
  console.info('Something went wrong!');
  console.error(message);
}

makePizza(['pineapple']).then(pizza => console.log(pizza))
                        .catch(handleError);



/* Promise.allSettled */
const p1 = makePizza(['chicken salad', 'cheese']);
const p2 = makePizza(['hamburger', 'pineapple']);

const allSettledPromise = Promise.allSettled([p1, p2]).then(([result1, result2]) => console.log(result1, result2));

// Promise.allSettled - tells us when the all of the promises are done
// regardless of whether they are resolved or rejected

// Promise.all requires that all promises must be resolved.
// If rejected, a catch block must be attached 