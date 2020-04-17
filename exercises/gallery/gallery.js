 function Gallery(gallery){
   if (!gallery) {
    throw new Error('Gallery does not exist!')
    // or return;
   }
  
   // select all  elements we need
   const images = [...gallery.querySelectorAll('img')];
   const modal = document.querySelector('.modal');
   const prevButton = document.querySelector('.modal .prev');
   const nextButton = document.querySelector('.modal .next');
   let currentImage;
   
   function openModal(){
    console.info('Opening Modal...');
    // first check if the modal is already open
    if (modal.classList.contains('open')){
      console.info('Modal already open');
      return; //stop the function from running
    }
     modal.classList.add('open');

     // Event listener to be bound when we open the modal
     nextButton.addEventListener('click', showNextImage);
     prevButton.addEventListener('click', showPreviousImage);
     window.addEventListener('keyup', handleKeyUp);
   }

   function closeModal(){
    modal.classList.remove('open');
    // TODO: add eventListeners for clicks and keyboards

    nextButton.removeEventListener('click', showNextImage);
    prevButton.removeEventListener('click', showPreviousImage);
    window.removeEventListener('keyup', handleKeyUp);
   }


   function handleClickOutside(e){
    return (e.target === e.currentTarget) && closeModal();
   }

   function handleKeyUp({ key }){
      if (key === 'Escape') return closeModal();
      if (key === 'ArrowRight') return showNextImage();
      if (key === 'ArrowLeft') return showPreviousImage();
   }


   function showImage(el){
     if (!el){
      console.info('No image to display');
      return;
     }
     // update the modal with this info
     //console.log(el);
     modal.querySelector('img').src = el.src;
     modal.querySelector('h2').innerText = el.title;
     modal.querySelector('p').innerText = el.dataset.description;
     currentImage = el;
     openModal();
   }

   function showPreviousImage(){
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
   }


   function showNextImage(){
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
   }
  
   function handleImageClick(){
     showImage(this);
   }
   
   // event listeners
   images.forEach(image => image.addEventListener('click', handleImageClick));
 
   // when the user tabs through
   // and presses 'Enter', images
   // displays because they are now 
   // assesible as a result of them
   // being given a tab index of "0"
   images.forEach(image => 
     image.addEventListener('keyup', e => {
       if (e.key === 'Enter'){
          showImage(e.currentTarget);
       }
   }))

   modal.addEventListener('click', handleClickOutside);
 }

 const gallery1 = Gallery(document.querySelector('.gallery1'));
 const gallery2 = Gallery(document.querySelector('.gallery2'));