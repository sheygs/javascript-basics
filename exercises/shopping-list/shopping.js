// define UI variables
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
const items = []; // state of our app

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
        <input type="checkbox"> 
        <span> ${item.name}</span>
        <button aria-label="Remove ${item.name}">&times;</button>
      </li>
    `
  }).join('');
  list.innerHTML = mappedItems;
}


function addToLocalStorage(){
  localStorage.setItem('items', JSON.stringify(items));
}

shoppingForm.addEventListener('submit', e => handleSubmit(e));
list.addEventListener('updateItems', displayItems);
list.addEventListener('updateItems', addToLocalStorage);