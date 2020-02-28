const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const inventory = [
  { type: 'shirt', price: 4000 },
  { type: 'pants', price: 4532 },
  { type: 'socks', price: 234 },
  { type: 'shirt', price: 2343 },
  { type: 'pants', price: 2343 },
  { type: 'socks', price: 542 },
  { type: 'pants', price: 123 },
];

function add(accumulator, element){
  // console.log(`Accumulator is ${accumulator}`);
  // console.log(`Element is ${element}`);
  // console.log('-------------------');
  return accumulator + element;
}

const sum = orderTotals.reduce(add, 0);

function singleInventory(acc,next){
  return acc + next.price;
}


function inventoryReducer(acc,item){
  const { type } = item;
  // acc[type] = acc[type] + 1 || 1;
  acc[type] ? acc[type]++ : acc[type] = 1;
  return acc;
}


const totalInventory = inventory.reduce(singleInventory, 0);
const reducer = inventory.reduce(inventoryReducer, {});
