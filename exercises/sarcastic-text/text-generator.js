const inputs = Array.from(document.querySelectorAll('[name=filter]'));
const textArea = document.querySelector('[name=text]');
const result = document.querySelector('.result');
const funkyLetters = {
  '-': '₋', 
  '!': 'ᵎ', 
  '?': 'ˀ', 
  '(': '⁽',
  ')': '₎',
  '+': '⁺',
  '=': '₌',
  '0': '⁰',
  '1': '₁',
  '2': '²',
  '4': '₄',
  '5': '₅',
  '6': '₆',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
   a: 'ᵃ',
   A: 'ᴬ', 
   B: 'ᴮ', 
   b: 'ᵦ', 
   C: '𝒸', 
   d: 'ᵈ',
   D: 'ᴰ', 
   e: 'ₑ', 
   E: 'ᴱ', 
   f: '𝒻', 
   F: 'ᶠ', 
   g: 'ᵍ', 
   G: 'ᴳ', 
   h: 'ʰ', 
   H: 'ₕ', 
   I: 'ᵢ', 
   i: 'ᵢ', 
   j: 'ʲ', 
   J: 'ᴶ', 
   K: 'ₖ', 
   k: 'ₖ', 
   l: 'ˡ', 
   L: 'ᴸ', 
   m: 'ᵐ', 
   M: 'ₘ', 
   n: 'ₙ', 
   N: 'ᴺ', 
   o: 'ᵒ', 
   O: 'ᴼ', 
   p: 'ᵖ', 
   P: 'ᴾ', 
   Q: 'ᵠ', 
   q: 'ᑫ', 
   r: 'ʳ', 
   R: 'ᵣ', 
   S: 'ˢ', 
   s: 'ˢ', 
   t: 'ᵗ', 
   T: 'ₜ', 
   u: 'ᵘ', 
   U: 'ᵤ', 
   v: 'ᵛ', 
   V: 'ᵥ', 
   w: '𝓌', 
   W: 'ʷ', 
   x: 'ˣ', 
   X: 'ˣ', 
   y: 'y', 
   Y: 'Y', 
   z: '𝓏', 
   Z: 'ᶻ' 
  };


function transformText(value){
  // const filter = document.querySelector('[name=filter]:checked').value;
  const filter = inputs.find(input => input.checked).value;

  /* case I */

  const letterArray = Array.from(value);
  const modified = letterArray.map(filters[filter]);
  console.log(modified);
  result.textContent =  modified.join('');
 
  /* case II */

  // const lettersArray = Array.from(value);
  // let modified;

  // switch(filter){
  //   case 'sarcastic':
  //         // take the text and loop over each letter
  //        modified = lettersArray.map(filters.sarcastic);
  //        break;
  //   case 'funky':
  //        modified = lettersArray.map(filters.funky);
  //        break;
  //   case 'unable':
  //        modified = lettersArray.map(filters.unable);
  //        break;
  //   default:
  //        break;
      
  // }
  // result.textContent = modified.join('');
}


const filters = {

  sarcastic(letter, index){
    // if it is odd, returns 1 (truthy) -> letter to uppercase
    // if it is even, returns 0 (falsy) -> letter to lowercase
    return (index % 2) ? letter.toUpperCase() : letter.toLowerCase();
  },

  funky(letter){
     // first check if there is a funky letter for this case
     let funkyLetter = funkyLetters[letter];
     if (funkyLetter) return funkyLetter; 

     // if there is not, check if there is a lowercase version 
     funkyLetter = funkyLetters[letter.toLowerCase()];
     if (funkyLetter)  return funkyLetter; 

    // if there is none, return the regular letter
    return letter;
  },

  unable(letter){
    const random = Math.floor(Math.random() * 3);
    if (letter === ' ' && random === 1){
      return '...';
    }
    return letter;
  }
}

textArea.addEventListener('input', ({ target }) => transformText(target.value));
inputs.forEach(input => input.addEventListener('input', () => transformText(textArea.value)));
