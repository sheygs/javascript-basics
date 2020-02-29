/* Accessibility Gotchas & Keyboard Codes */

const photo = document.querySelector('.photo');
function handleClick(e) {
  if (e.type === 'click' || e.key === 'Enter') {
    console.log(`You clicked me using the ${e.key} key`);
  }
}

photo.addEventListener('click', handleClick);
// accessibility tricks
photo.addEventListener('keypress', handleClick);
