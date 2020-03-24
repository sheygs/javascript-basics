// Asynchronous/non-blocking
setTimeout(() => console.log('Starting'), 1000);
setTimeout(() => console.log('Running'), 1500);
console.log('Ending');


const go = document.querySelector('.go');
go.addEventListener('click', function(e){
   const el = e.target;
   // change the text at Go when clicked
   el.textContent = 'GO!';
   // 1 Make it a circle after 2 s
   setTimeout(function(){
    el.classList.add('circle');
       // 2 make it red after 0.5 s
       setTimeout(function(){
       el.classList.add('red');
        // 1 make it square after 0.25s
        setTimeout(function(){
         el.classList.remove('circle');
           // make it purple after 0.3s
           setTimeout(function(){
             el.classList.remove('red');
             el.classList.add('purple');
               // fade it out after 0.5s
               setTimeout(function(){
                el.classList.add('fadeOut');
              },500);
          },300);
        },250)
      },500);
   }, 2000);
});
