const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');


function callback(payload){
 const { intersectionRatio } = payload[0];
 if (intersectionRatio === 1){
  button.disabled = false;
  observer.unobserve(terms.lastElementChild);
 }
}

// create an instance of an intersection observer
const observer = new IntersectionObserver(callback, {
 root: terms,
 threshold: 1
});

// make observation
observer.observe(terms.lastElementChild);