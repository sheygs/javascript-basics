function Gallery(gallery){
 if (!gallery) {
    return;
 }

 this.gallery = gallery;
 // select all  elements we need
 this.images = [...gallery.querySelectorAll('img')];
 this.modal = document.querySelector('.modal');
 this.prevButton = document.querySelector('.modal .prev');
 this.nextButton = document.querySelector('.modal .next');

 // bind our method to the instance when we need them
 this.showNextImage = this.showNextImage.bind(this);
 this.showPreviousImage = this.showPreviousImage.bind(this);
 this.handleKeyUp = this.handleKeyUp.bind(this);
 this.handleClickOutside = this.handleClickOutside.bind(this);

 // event listeners
 this.images.forEach(image => image.addEventListener('click', e => this.showImage(e.currentTarget)));

 // when the user tabs through
 // and presses 'Enter', images
 // displays because they are now 
 // assesible as a result of them
 // being given a tab index of "0"
 this.images.forEach(image => 
   image.addEventListener('keyup', e => {
     if (e.key === 'Enter'){
        this.showImage(e.currentTarget);
     }
 }))

 this.modal.addEventListener('click', this.handleClickOutside);
}

Gallery.prototype.openModal = function(){
   console.info('Opening Modal...');
   // first check if the modal is already open
   if (this.modal.classList.contains('open')){
     console.info('Modal already open');
     return; //stop the function from running
   }
   this.modal.classList.add('open');

   // Event listener to be bound when we open the modal
   this.nextButton.addEventListener('click', this.showNextImage);
   this.prevButton.addEventListener('click', this.showPreviousImage);
   window.addEventListener('keyup', this.handleKeyUp);
}

Gallery.prototype.closeModal = function(){
 this.modal.classList.remove('open');
 // TODO: add eventListeners for clicks and keyboards
 this.nextButton.removeEventListener('click', this.showNextImage);
 this.prevButton.removeEventListener('click', this.showPreviousImage);
 window.removeEventListener('keyup', this.handleKeyUp);
}


Gallery.prototype.handleClickOutside = function(e){
 return (e.target === e.currentTarget) && this.closeModal();
}

Gallery.prototype.handleKeyUp = function({ key }){
   if (key === 'Escape') return this.closeModal();
   if (key === 'ArrowRight') return this.showNextImage();
   if (key === 'ArrowLeft') return this.showPreviousImage();
}


Gallery.prototype.showPreviousImage = function(){
 this.showImage(this.currentImage.previousElementSibling || this.gallery.lastElementChild);
}


Gallery.prototype.showNextImage = function(){
 this.showImage(this.currentImage.nextElementSibling || this.gallery.firstElementChild);
}



Gallery.prototype.showImage = function(el){
 if (!el){
  console.info('No image to display');
  return;
 }
 // update the modal with this info
 this.modal.querySelector('img').src = el.src;
 this.modal.querySelector('h2').innerText = el.title;
 this.modal.querySelector('p').innerText = el.dataset.description;
 this.currentImage = el;
 this.openModal();
}

const gallery1 = new Gallery(document.querySelector('.gallery1'));
const gallery2 = new Gallery(document.querySelector('.gallery2'));

console.log(gallery1, gallery2);