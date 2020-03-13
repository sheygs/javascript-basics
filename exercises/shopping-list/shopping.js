// define UI variables
const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');
const items = []; // state of our app


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
  displayItems(); 
  form.reset();
}


function displayItems(){
  const mappedItems = items.map(item => {
    return `
      <li class="shopping-item">
        <input type="checkbox"> 
        <span> ${item.name}</span>
        <button>&times;</button>
      </li>
    `
  }).join('');
  list.innerHTML = mappedItems;
}


shoppingForm.addEventListener('submit', e => handleSubmit(e));