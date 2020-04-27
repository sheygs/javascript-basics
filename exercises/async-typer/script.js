const wait = ( ms = 10 ) => new Promise(resolve => setTimeout(resolve, ms));

wait().then(_ => console.log('waited!'));


function getRandomBtw(min = 20, max = 100, random = Math.random()){
 return Math.floor(random * (max - min + 1)) + min;
}


// iterative approach

// async function draw(el){
//  const text = el.textContent;
//  const { typeMin, typeMax } = el.dataset;
//  let string = '';
//  for (const char of text){
//     console.log(string);
//     string+=char;
//     el.textContent = string;
//     await wait(getRandomBtw(typeMin, typeMax));
//  }
// }



// recursive approach

function draw(el){
 let index = 1;
 const text = el.innerText;
 const { typeMin, typeMax } = el.dataset;
 async function drawLetter(){
    const length = text.length - 1;
    el.textContent = text.slice(0, index);
    index++;
    await wait(getRandomBtw(typeMin,typeMax));
    if (index <= length) {
     drawLetter();
    }
 }
  drawLetter();
}

document.querySelectorAll('[data-type]').forEach(draw);