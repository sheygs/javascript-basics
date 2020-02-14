/* eslint-disable */

function preventDefault(e) {
  e.preventDefault();
}

//  const checkbox = document
//                  .querySelector('[type="checkbox"]')
//                  .addEventListener('click', preventDefault);

// links
// document.querySelector('.sheygs').addEventListener('click', function(e) {
//   // eslint-disable-next-line no-restricted-globals
//   const shouldChangePage = confirm('Do you want to go to the requested site ?');
//   if (!shouldChangePage) {
//     e.preventDefault();
//   }
// });

// Input 
// document
//   .querySelector('[type="text"]')
//   .addEventListener('keypress', preventDefault);

// Forms 
const form = document.querySelector('.main-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = e.currentTarget.name.value;
  const regex = /chad/i;
  if (regex.test(name)) {
    alert('Chad not allowed');
  }
});

function log(e) {
  console.log(`Event Type: ${e.type}; Value: ${e.currentTarget.value}`);
}

// form.name.addEventListener('keypress', log);
// form.name.addEventListener('focus', log);
// form.name.addEventListener('blur', log);
