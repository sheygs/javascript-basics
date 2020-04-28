function Slider(slider){
   if (!(slider instanceof Element)){
    throw new Error('Invalid Argument')
   }

   // create slider variables
   let previous;
   let current;
   let next;
  

   // select all elements needed for the slider
   const slides = slider.querySelector('.slides');
   const prevButton = slider.querySelector('.goToPrev');
   const nextButton = slider.querySelector('.goToNext');

   function startSlider(){
    current = slider.querySelector('.current') || slides.firstElementChild;
    previous = current.previousElementSibling || slides.lastElementChild;
    next = current.nextElementSibling || slides.firstElementChild;
   }

   function addClasses(){
    current.classList.add('current');
    previous.classList.add('prev');
    next.classList.add('next');
   }


   function move(direction){
    // strip off all the classes in the current slides
    const removeClasses = ['prev', 'current', 'next'];

    previous.classList.remove(...removeClasses);
    current.classList.remove(...removeClasses);
    next.classList.remove(...removeClasses);

    if (direction === 'back'){
      // make an array of the new values, and destructure
      // them over and into the prev, current and next 
      // variables.
     [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
    } else {
     [prev, current, next] = [current, next, next.nextElementSibling];
    }
    addClasses();
   }

   // run when the slider is created
   startSlider();
   addClasses();

   // Event listeners
   prevButton.addEventListener('click', () => move('back'));
   nextButton.addEventListener('click', move);

}



const slider1 = Slider(document.querySelector('.slider'));
const slider2 = Slider(document.querySelector('.dog-slider'));


