const wait = ( ms = 10 ) => new Promise(resolve => setTimeout(resolve, ms));

wait().then(_ => console.log('waited!'));


function getRandomBtw(min = 20, max = 100, random = Math.random()){
 return Math.floor(random * (max - min + 1)) + min;
}

async function draw(element){
 const text = element.textContent;
 const { typeMin, typeMax } = element.dataset;
 let string = '';
 for (const char of text){
    console.log(string);
    string+=char;
    element.textContent = string;
    await wait(getRandomBtw(typeMin, typeMax));
 }
  
}

document.querySelectorAll('[data-type]').forEach(draw);