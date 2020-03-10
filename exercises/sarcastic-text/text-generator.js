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



function update(e){
  
  const filter = inputs.filter(input => input.checked)[0].value;
  const textArray = textArea.value.split('');
  let modified;

  switch(filter){
    case 'sarcastic':
          modified = textArray.map((el,index) => {
             return (index % 2) ? el.toUpperCase() : el.toLowerCase();
          });
          break;

    case 'funky':
          modified = textArray.map(letter => {
            return funkyLetters[letter] ? funkyLetters[letter] 
                   : funkyLetters[letter.toLowerCase()] ? 
                     funkyLetters[letter.toLowerCase()]
                   : letter;
          });
          break;

    case 'unable':
         modified = textArray.map(letter => {
           const random = Math.floor(Math.random() * 4);
           return (letter === ' ' && random === 3) ?  letter.replace(letter,'...') : letter;
         });
         break;
  }
  result.textContent = modified.join(''); 
}

 textArea.addEventListener('input',e => update(e));
 inputs.forEach(input => input.addEventListener('input', _ => update(textArea)));