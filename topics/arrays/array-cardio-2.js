
const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

const word_strings = "hot dogs,hamburgers,sausages,corn";

const buns = ['egg', 'wonder', 'brioche'];


  // Display all bun types with " or " - use join()
  console.log(buns.join(' or '));

  console.log('---------------------------------------');

  // We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into an array
  console.log(word_strings.split(','));

  console.log('------------------------------------------------------------------------');

  // take the last item off toppings with pop()
  toppings.pop();
  console.log(toppings);

  console.log('-------------------------------------------------------------------------');

  // add it back with push()
  toppings.push('Cheese');
  console.log(toppings);

  console.log('-------------------------------------------------------------------------');

  // take the first item off toppings with shift()
  toppings.shift();
  console.log(toppings);

  console.log('--------------------------------------------------------------------------');

  // add it back in with unshift()
  toppings.unshift('Mushrooms');
  console.log(toppings);

  console.log('--------------------------------------------------------------------------');

 // Do the last four,but immutable (with spreads and new variables)

 // pop
 let newToppings = toppings.slice(0, toppings.length - 1);
 console.log(toppings);
 console.log(newToppings);

 console.log('---------------------------------------------------------------------------');

 // push
 newToppings = [ ...newToppings, 'Cheese'];

 // shift
 newToppings = newToppings.slice(1);

 // unshift
 newToppings = [...toppings.slice(0, 1), ...newToppings];

 // Make a copy of the toppings array with slice()
 const toppings1 = toppings.slice();

 // Make a copy of the toppings array with a spread
 const toppings2 = [...toppings];

 // take out items 3 to 5 of your new toppings array with splice()
 console.log(toppings2.splice(2, 3));

 // find the index of Avocado with indexOf() / lastIndexOf()
 const index = toppings.indexOf('Avocado');
 console.log(index);

 const lastIndex = toppings.lastIndexOf('Avocado');
 console.log(lastIndex);

 // Check if hot sauce is in the toppings with includes()
 // add it if it's not
 function checkItem(list, item){
   if (!list.includes(item)) { 
     return [
        ...list,
        item
     ];
   }
   return;
 }

 console.log(checkItem(toppings,'Hot Sauce'))

 // flip those toppings around with reverse()
 console.log(toppings.slice().reverse());
