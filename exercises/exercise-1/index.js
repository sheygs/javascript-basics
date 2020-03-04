// grab all elements to add event listeners
// get context from canvas
// listen for keydown event 
// implement draw functionality
// implement shake/clear functionality

/*  grab all required elements */
const canvas = document.querySelector('.canvasWrap > canvas');
const buttonShake = document.querySelector('.shake');

const ALLOWED_KEYS = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
const MOVE_SPEED = 20;
/* get context from canvas */
const context = canvas.getContext('2d');

// get width and height of canvas
const { width, height } = canvas;


// define shape and width of the obj displayed
context.lineWidth = 13;
context.lineCap = "round";
context.lineJoin = "round";


let x = getRandomPosition(width);
let y = getRandomPosition(height);


//create a new path
context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y);
//render the obj to the canvas
context.stroke(); 

// generate random position
function getRandomPosition(num){
  return Math.floor(Math.random() * num);
}


function draw({ key}){
  context.moveTo(x,y);
   switch(key){
     case 'ArrowUp':
         y-=MOVE_SPEED;
         break;
     case 'ArrowDown':
         y+=MOVE_SPEED;
         break;    
     case 'ArrowLeft':
         x-=MOVE_SPEED;
         break;
     case 'ArrowRight':
         x+=MOVE_SPEED;
         break;
     default:
       break;
   }
   context.lineTo(x,y);
   context.stroke();
}


function removeAnimation(){
  canvas.classList.remove('shake');
}

function clearCanvas(){
  canvas.classList.add('shake');
  canvas.addEventListener('animationend', removeAnimation);
  //setTimeout(() => canvas.classList.remove('shake'), 500);
  context.clearRect(0, 0, width, height);
}

function handleKey(e){
  if (ALLOWED_KEYS.includes(e.key)){
    e.preventDefault();
    draw(e);
    console.log(e.key);
  }
}

//listen for keydown event
window.addEventListener('keydown', handleKey);
buttonShake.addEventListener('click', () => clearCanvas());