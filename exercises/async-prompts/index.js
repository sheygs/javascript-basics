function wait(ms = 0){
 return new Promise(resolve => setTimeout(resolve, ms));
}


async function removePopup(popupForm){
 popupForm.classList.remove('open');
 await wait(1000);
 // remove the popup from the DOM completely
 popupForm.remove();
}


function ask(options){
 return new Promise(async resolve => {
    const popupForm = document.createElement('form');
    popupForm.classList.add('popup');
    popupForm.innerHTML =  `
     <fieldset>
       <label>${options.title}</label>
       <input type="text" name="input">
       <button type="submit">Submit</button>
     </fieldset>
    `;

    // check if they want a cancel button
    if (options.cancel){
     const cancelButton = document.createElement('button');
     cancelButton.type = 'button';
     cancelButton.textContent = 'cancel';
     popupForm.children[0].insertAdjacentElement('beforeend', cancelButton);

     // listen for a click on that button
     cancelButton.addEventListener('click', function(){
       // when sb cancels, resolve to null
       resolve(null);

       // remove popup
       removePopup(popupForm);
       
     }, { once: true })
    }

    // listen for submit event on the inputs
    popupForm.addEventListener('submit', function(e){
      e.preventDefault();
      console.log('submitted')
      // when sb submits, resolve the data that was in the input box!
      resolve(e.target.input.value);
  
      // remove popup
      removePopup(popupForm)
       // listen for the submit event once and remove it afterwards
    }, { once: true });
    

    // insert popupForm into the DOM
    document.body.insertAdjacentElement('afterbegin', popupForm);


    // set a minute timeout before the form pop ups
    await wait(50);

    // display popupForm
    popupForm.classList.add('open');
    
 });
 
}

// select all buttons that have a question
async function askQuestion(e){
 const button  = e.currentTarget;
 const cancel = button.dataset.hasOwnProperty('cancel');
 const answer = await ask({ title: button.dataset.question, cancel });
 console.log(answer);
}


const buttons = document.querySelectorAll('[data-question]');
buttons.forEach(button => button.addEventListener('click', askQuestion));

const questions  = [
  {title: 'What is your name?'},
  {title: 'What is your age?', cancel: true},
  {title: 'What is your dog\'s name ?'}
]


async function asyncMap(array, callback){
   let list = [];
   for (const item of array){
      const result = await callback(item);
      list = [...list, result];
   }
   return list;
}

async function onPageLoad(){
  const answers = await asyncMap(questions, ask);
  console.log(answers);
}

onPageLoad();