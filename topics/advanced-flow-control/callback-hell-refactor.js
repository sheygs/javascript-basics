function wait(ms = 1000){
  return new Promise(function(resolve){
    setTimeout(resolve, ms);
  });
}

wait().then(() => console.log('Done'));

const go = document.querySelector('.go');


function animate(e){
 // grab the element
 const el = e.target;
 // change the text at Go when clicked
 el.textContent = 'GO!';
 // 1 Make it a circle after 2 s
 wait(2000)
 .then(() => {
    el.classList.add('circle');
     // 2 make it red after 0.5 s
    return wait(500);
 })
 .then(() => {
  el.classList.add('red');
   // 1 make it square after 0.25s
  return wait(250);
 })
 .then(() => {
  el.classList.remove('circle');
  // make it purple after 0.3s
  return wait(300);
 })
 .then(() => {
  el.classList.remove('red');
  el.classList.add('purple');
  // fade out after 5s
  return wait(500);
 })
 .then(() => {
  el.classList.add('fadeOut');
 })
}
go.addEventListener('click', animate)





