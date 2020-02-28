const people = [
  {
    birthday: 'April 22, 1993',
    names: {
      first: 'Keith',
      last: 'Buckley'
    }
  },
  {
    birthday: 'January 3, 1975',
    names: {
      first: 'Larry',
      last: 'Heep'
    }
  },
  {
    birthday: 'February 12, 1944',
    names: {
      first: 'Linda',
      last: 'Bermeer'
    }
  }
];

const students = [
  {
    id: '11ce',
    first_name: 'Dall',
    last_name: 'Puckring',
  },
  {
    id: '2958',
    first_name: 'Margarete',
    last_name: 'Brandi',
  },
  {
    id: '565a',
    first_name: 'Bendicty',
    last_name: 'Woodage',
  },
  {
    id: '3a16',
    first_name: 'Micki',
    last_name: 'Mattes',
  },
  {
    id: 'f396',
    first_name: 'Flory',
    last_name: 'Gladeche',
  },
  {
    id: 'de5f',
    first_name: 'Jamill',
    last_name: 'Emilien',
  },
  {
    id: '54cb',
    first_name: 'Brett',
    last_name: 'Aizikowitz',
  },
  {
    id: '9135',
    first_name: 'Lorry',
    last_name: 'Smallman',
  },
  {
    id: '978f',
    first_name: 'Gilly',
    last_name: 'Flott',
  },
];

const sanitizePeople = people.map(function(person){
  //console.log(person);
  // get their birthday
  // figure out how old they are
  // return their fullname and birthday(in yrs.) in an object
  const { birthday, names } = person;
  const { first, last } = names;
  const age = calculateAge(birthday);
  return {
    name: `${first} ${last}`,
    age
  };
});

console.log(sanitizePeople);

function calculateAge(birthday) { 
  const MILLISECONDS_PER_YEAR = 3.1536e+10;
  const date = new Date(birthday);
  const differenceInMilliseconds = Date.now() - date.getTime();
  const age =  Math.floor(differenceInMilliseconds/MILLISECONDS_PER_YEAR);
  return age;
}


// Find - returns the FIRST ELEMENT that match the condition (returns an obj)
// filter - returns all the items that matches the condition (returns an array)


const over40 = sanitizePeople.filter(({ age }) => age >= 40 );
const Larry = sanitizePeople.find(({ name }) => name.match(/larry/i));


/* find student by fixed ID */

// function findStudentByID(student){
//   return student.id === '2958';
// }

// function findStudentByID({ id }){
//   return id === '2958';
// }

// const isStudent = students.filter(findStudentByID);


/* find student by variable ID */

// function findStudentByID(ID){
//   return function (student){
//     return student.id === ID;
//   }
// }

const findStudentByID = ID => student => student.id === ID;

const isStudent = students.filter(findStudentByID('2958'));

/* find student by properties */

//  function findStudentByProps(prop, value){
//    return function isStudent(student){
//      return student[prop] === value;
//    }
//  }

const findStudentByProps = (prop,value) => student => student[prop] === value;

const student1 = students.filter(findStudentByProps('first_name','Brett'));
const student2 = students.find(findStudentByProps('id','978f'));

