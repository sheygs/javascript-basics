import wait from 'waait';
import { name, phone } from 'faker';
import { formatDistance, format } from 'date-fns'
import axios from 'axios';
import { chunk, intersection } from 'lodash';
// import to from 'await-to-js';


async function go(){
  await wait(3000);
  console.log('Go!');
}


function createPerson(firstName, lastName, jobTitle, jobDescriptor, phone){
  return {
    firstName,
    lastName,
    phone,
    jobTitle,
    jobDescriptor
  }
}

const fullNameObj = createPerson(name.firstName(), name.lastName(), name.jobTitle(), name.jobDescriptor(), phone.phoneNumber());
// console.log(fullNameObj)

const randomNameList = Array(10).fill().map((_) => `${name.firstName()} ${name.lastName()}`);
// console.log(randomNameList);

const diff = formatDistance(
 new Date(),
 new Date(1986, 3, 4, 10, 32, 0),
 { addSuffix: true }
);
// console.log(diff);

// May the 8th 2020
const formatted = format(new Date(),`LLLL 'the' do y`);
// console.log(formatted)

async function getJoke(){
 const options = {
    headers: {
     Accept: 'application/json'
    }
 }
  const result = await axios.get('https://icanhazdadjoke.com/', options);
  const { data } = result;
  const joke = data.joke;
  // console.log(joke);

} 

const split = chunk([1,2,3,4,5,6,7],5);
const common = intersection([1,2,3],[2,4,6]);
console.log(split);
console.log(common);

getJoke();
go();