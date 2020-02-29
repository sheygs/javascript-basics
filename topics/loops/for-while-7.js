/* for...loop - runs a loop a certain number of times */

for (let i = 0; i < 10; i++){
  console.log(i);
}


/* infinite loop */
/* 'break' out of the loop */

// for (let i = 0;; i++){
//    if (i === 12) break;
//    console.log(i);
// }

// let i = 0,
// len = numbers.length;
// for (;i < len; i+=2){
//    if (numbers[i] === 1)
//       continue;
//    console.log(numbers[i]);
// }


/* infinite loop */
// for (let i = 0;;i++){
//   console.log(i)
// }


/* while...loop runs a condition infinitely 
   until the condition is false
*/

// while
// infinite loop
// loop controlled with 'break'

let cool = true, i = 0;
while(cool === true){
  console.log('You are 😎');
  i++;
  if (i > 100) {
    cool = false;
  }
}

/* do-while...loop - runs at least once */