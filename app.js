console.log("Ciao mundo");

 // ## Array Cardio Day 2

 const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

const arrFamily = [
  {name: "Bruno", age: 30, title:"Dad"},
  {name: "Liz", age: 28, title:"Mom"},
  {name: "Ian", age: 2, title:"Son"},
  {name: "Baby", age: -1, title:"unknown"}

]





/*******************************
*           some()  
*******************************/
// Array.prototype.some() 
// is at least one person 19 or older?

// const isAdult =  people.some((person) => {
//   const currentYear = (new Date()).getFullYear(); 
//   return currentYear - person.year >=19; 
// })

// console.log(isAdult);

/*******************************
*             every()  
*******************************/

// Array.prototype.every() 
// is everyone 19 or older?

// const areTheyAdults =  people.every((person) => {
//   const currentYear = (new Date()).getFullYear(); 
//   return currentYear - person.year <=19; 
// })
// console.log(areTheyAdults);


/*******************************
*           find()
*******************************/
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423