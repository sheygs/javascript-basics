/* 
  Prevent Defaults & Form Events
  - e.preventDefault()gives you the ability to prevent a browser's default behavior for an event
  - You can `preventDefault` on all sort of different HTML element

 - keydown
 - keyup
 - focus
 - blur
*/

// Checkboxes
// Normally, when you click on a checkbox, it'll toggle the check.
// However, using `preventDefault` will stop the browser from doing that.

/* eslint-disable no-unused-vars */
function preventDefault(e) {
  e.preventDefault();
}

//  const checkbox = document
//                  .querySelector('[type="checkbox"]')
//                  .addEventListener('click', preventDefault);

// Links - click event
// document.querySelector('.sheygs').addEventListener('click', function(e) {
//   // eslint-disable-next-line no-restricted-globals
//   const shouldChangePage = confirm('Do you want to go to the requested site ?');
//   if (!shouldChangePage) {
//     e.preventDefault();
//   }
// });

// Input box - keypress event
// Targeting the `keyup` event on the <input> won’t prevent
// you from entering text since that happens during the `keydown` event.
// That's why `keypress` is used because it covers both `keydown/keyup`

// document
//   .querySelector('[type="text"]')
//   .addEventListener('keypress', preventDefault);

// Forms - submit event
// In real life, `preventDefault` is most often used to stop forms from
// automatically submitting when the submit button is clicked, giving
// you a chance to instead submit the form data asynchronously using
// JavaScript and something like the Fetch API to make an Ajax request.
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
