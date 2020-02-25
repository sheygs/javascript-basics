const meats = {
  beyond: 10,
  beef: 5,
  pork: 7
};

// creates an array from every argument passed into it
console.log(Array.of(...'segun'));
console.log(Array.of(1, 2, 4, 6));


// Both creates 5 empty slots of undefined values
Array(5).fill();
Array.from({ length: 5 });

// Make a function that creates a range from x to y with Array.from()

// Method 1
function range(start, end, step){
  return Array.from({ length: (end - start) / step + 1 },function(_,index){
    return start + (index * step);
  })
}

// Method 2
function range_(start, end, step = 1){
  const arr = Array((end - start) / step + 1).fill().map((_,i) => {
    return (i * step) + start;
  })
  return arr;
}


// Generate an alphabet using Array.from making use of it being ordered as a sequence
const alphabets = range_('A'.charCodeAt(0), 'Z'.charCodeAt(0)).map(number => String.fromCharCode(number));


// Test if the array created is truly an array
const rangeValues = range_(4, 20, 2);
console.log(Array.isArray(rangeValues));



// Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

// 1) looping
Object.entries(meats).forEach(entry => {
  // destructuring
  const [key, value] = entry; 
  console.log(key, value);
})

// cleaner solution to 1)
// Object.entries(meats).forEach(([key, value]) => console.log(key, value));

