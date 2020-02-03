// Accessibility Gotchas & Keyboard Codes

// Tips:
// Buttons are to be used for actions that happen inside of an application
// Links are used to change the page
// elts that are not keyboard accessible should not have clicks registered on them

const photo = document.querySelector('.photo');
function handleClick(e) {
  if (e.type === 'click' || e.key === 'Enter') {
    console.log(`You clicked me using the ${e.key} key`);
  }
}

photo.addEventListener('click', handleClick);
// accessibility tricks
photo.addEventListener('keypress', handleClick);
