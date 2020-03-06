const buttons = document.querySelectorAll('.card button');
const innerModal = document.querySelector('.modal-inner');
const outerModal = document.querySelector('.modal-outer');

function handleButtonClick(){
  // this refers to the button
  const card = this.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const description = card.dataset.description;
  const name = card.querySelector('h2').textContent;
  
  // populate the modal with the new info
  innerModal.innerHTML = `
   <h2>${name}</h2>
   <img src="${imgSrc}" alt="${name}">
   <p>${description}</p>
  `;

 // show the modal
 outerModal.classList.add('open');
}  

function closeModal(){
  outerModal.classList.remove('open');
}


outerModal.addEventListener('click', function(e){
  // console.log(e.target);
  // console.log(e.currentTarget);
 const isOutside = !e.target.closest('.modal-inner');
 return isOutside && closeModal();
})

buttons.forEach(button => button.addEventListener('click', handleButtonClick))


window.addEventListener('keydown', ({ key }) => {
  return key === 'Escape' && closeModal();
});