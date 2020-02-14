/* eslint-disable */
const turtle = document.querySelector('.turt');
let x = 0,
    y = 0,
    flipped = false,
    rotate = 0;
const speed = 10;
function handleKeyDown(event){
  // Not an arrow key ? ignore : utilise
 if (!event.key.includes('Arrow')) { return; }
  switch(event.key){
      case 'ArrowUp':
           y--;
           rotate = -90;
           break;
      case 'ArrowDown':
           y++;
           rotate = 90;
           break;
      case 'ArrowLeft':
           x--;
           rotate = 0;
           flipped = true;
           break;
      case 'ArrowRight':
           x++;
           rotate = 0;
           flipped = false;
           break;
      default:
           alert('Invalid Move!');
           break;
  }
   turtle.setAttribute('style',`
   --rotateX: ${flipped ? '180deg' : '0'};
   --rotate: ${rotate}deg;
   --x: ${x * speed}px;
   --y: ${y * speed}px
   `);

   console.log(x,y);
}

window.addEventListener('keydown', handleKeyDown);