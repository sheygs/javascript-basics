import { sanitize } from 'dompurify';

const input = document.querySelector("[name='input']");
const output = document.querySelector('.output');
const buttons = document.querySelectorAll('nav button');

input.addEventListener('input', () => {
  // scrub the input off from potential XSS attacks
  const sanitized = sanitize(input.value, {
    FORBID_TAGS: ['style'],
    FORBID_ATTR: ['width', 'height','style']
  });
  output.innerHTML = sanitized.replace(/\n/g, '<br>')
})

// trigger an input even on page load
input.dispatchEvent(new Event('input'));

buttons.forEach(button => {
 button.addEventListener('click', function(e){
   alert(e.currentTarget.textContent);
 })
})
