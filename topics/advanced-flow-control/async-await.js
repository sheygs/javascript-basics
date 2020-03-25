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

async function run(){
  console.log('Starting...');
  await wait();
  console.log('Running...');
  await wait();
  console.log('Ending...')
}

//run();

async function makeDinner(){
     const pizza1 = makePizza();
     const pizza2 = makePizza(['pepperoni']);
     const [ value1, value2 ] = await Promise.all([pizza1, pizza2]);
     console.log(value1, value2);
}

//makeDinner();


// refactor to async/await
const go = document.querySelector('.go');

async function animate(e){
 const el = e.target;
 // change the text at Go when clicked
 el.textContent = 'GO!';
 // 1 Make it a circle after 0.2 s
 await wait(200);
 el.classList.add('circle');
 // 2 make it red after 0.5 s
 await wait(500);
 el.classList.add('red');
 // 1 make it square after 0.25s
 await wait(250);
 el.classList.remove('circle');
 // make it purple after 0.5s
 await wait(500);
 el.classList.remove('red');
 el.classList.add('purple');
 //fade it out after 0.5s
 await wait(500);
 el.classList.add('fadeOut');
} 

go.addEventListener('click', animate)
 
