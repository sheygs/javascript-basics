const wait  = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

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


/* 1. using try/catch */

// async function run(){
//   try {
//     const pizza = await makePizza(['pineapple']);
//     console.log(pizza);
//   }catch(error){
//     console.error(error.message);
//   }
// }

// run();


/* 2. mixing async/await with 'catch' inside the function definition */

// function handleError(error){
//   console.log('something went wrong');
//   console.log(error.message);
// }

// async function run(){
//   const pizza = await makePizza(['pineapple']).catch(handleError)
//   console.log(pizza);
// }

// run();


/* 3. mixing async/await with 'catch' attached to the function call */

// function handleError(error){
//   console.log('something went wrong');
//   console.error(error.message);
// }

// async function run(){
//   const pizza = await makePizza(['pineapple']);
//   console.log(pizza);
// }

// run().catch(handleError);


/* 4.  safe function using higher-order function */

function handleError(error){
  console.log('something went wrong');
  console.error(error.message);
}

async function run(){
  const pizza = await makePizza(['pineapple']);
  console.log(pizza);
}


function safeFunction(fn, errorHandler){
   return function (){
     fn().catch(errorHandler);
   }
}

safeFunction(run, handleError)();
