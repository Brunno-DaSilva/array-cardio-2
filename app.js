console.log("Ciao mundo");

// ## Array Cardio Day 2

const people = [
  { name: "Bruno", year: 1989 },
  { name: "Liz", year: 1991 },
  { name: "Ian", year: 2017 },
  { name: "BabyIncognito", year: 2020 }
];

const comments = [
  { text: "Let's Code an hour a day", id: 33325 },
  { text: "I start my day with a dev Article", id: 552658 },
  { text: "Two JavaScript Challenges", id: 10205688 },
  { text: "Work on something meaningful", id: 23566 },
  { text: "Relax, enjoy family, meditate", id: 542328 }
];

/*******************************
 *           some()
 *******************************/
// Array.prototype.some()
// is at least one person 19 or older?

const isAdult = people.some(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});

console.table(isAdult);

/*******************************
 *         every()
 *******************************/

// Array.prototype.every()
// is everyone 19 or older?

const areTheyAdults = people.every(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year <= 19;
});
console.log(areTheyAdults);

/*******************************
 *           find()
 *******************************/
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(comment => comment.id === 823423);

console.log(comment);

/*******************************
 *           findIndex()
 *******************************/
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1);

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
