// define UI variables
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
let items = []; // state of our app

const event = new CustomEvent('updateItems');

function handleSubmit(e){
 e.preventDefault();
 const form = e.target;
 const name = form.item.value;
 if (!name) return;
 if (/[a-z]{3,}/i.test(name)){
  const item = {
    id: items.length + 1,
    name,
    isComplete: false
  }
  items.push(item);
  console.log(`${items.length} items in the cart`);
 }
  list.dispatchEvent(event);
  form.reset();
}


function displayItems(){
  const mappedItems = items.map(item => {
    return `
      <li class="shopping-item">
        <input type="checkbox"
         value="${item.id}"
         ${item.isComplete && 'checked'}
        > 
        <span> ${item.name}</span>
        <button 
        aria-label="Remove ${item.name}"
        value="${item.id}"
        >
        &times;</button>
      </li>
    `
  }).join('');
  list.innerHTML = mappedItems;
}


function addToLocalStorage(){
  localStorage.setItem('items', JSON.stringify(items));
}

function populateItemsFromLocalStorageOnPageLoad(){
  const listItems = JSON.parse(localStorage.getItem('items'));
  if (listItems.length){
    items.push(...listItems);
    list.dispatchEvent(event);
  }
}


function deleteItem(id){
  console.log('Deleting Item', id);
  items = items.filter(item => item.id !== id);
  list.dispatchEvent(event);
}


function markAsComplete(id){
  console.log('Marking as complete', id);
  const itemRef = items.find(item => item.id === id);
  itemRef.isComplete = !itemRef.isComplete;
  list.dispatchEvent(event);
  console.log(itemRef);
}

shoppingForm.addEventListener('submit', e => handleSubmit(e));
list.addEventListener('updateItems', displayItems);
list.addEventListener('updateItems', addToLocalStorage);


// event delegation
list.addEventListener('click', function(e){
   const id = Number(e.target.value);
   if (e.target.matches('button')){
     deleteItem(id);
   }

   if (e.target.matches('input[type="checkbox"]')){
     markAsComplete(id);
   }
});

// run on page load
populateItemsFromLocalStorageOnPageLoad();