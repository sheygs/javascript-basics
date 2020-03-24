function makePizza(toppings = ['hot dog']){
 return new Promise((resolve, reject) => {
  const timeToBake = 500 + (toppings.length * 200);
    setTimeout(() => {
      resolve(`Here is your 🍕 with toppings ${toppings.join(' ')}`);
    }, timeToBake);
 });
}

 /* promise chaining */
//  makePizza(['pepperoni'])
// .then(function(pizza){
//     console.log(pizza);
//     return makePizza(['Ham', 'Cheese']);
//  })
//  .then(function(pizza){
//     console.log(pizza);
//     return makePizza(['hot peppers', 'onions', 'feta']);
//   })
//   .then(function(pizza){
//      console.log(pizza);
//   })

   /* Promise.all (concurrent promise) */
  const promise1 = makePizza(['pepperoni']);
  const promise2 = makePizza(['Ham', 'Cheese']);
  const promise3 = makePizza(['phot peppers', 'onions', 'feta']);

  // Promise.all([promise1, promise2, promise3])
  // .then(([p1, p2, p3]) => console.log(p1, p2, p3));

 
 /* Promise.race */
 Promise.race([promise1, promise2, promise3])
 .then(pizza => console.log(pizza));
