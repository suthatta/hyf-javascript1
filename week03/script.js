//"use strict";

//dob: date of birth
let allPersons = [
  { name: "Jule", dob_day: 12, dob_month: 5, dob_year: 1986 },
  { name: "Pete", dob_day: 8, dob_month: 3, dob_year: 1988 },
  { name: "Nina", dob_day: 6, dob_month: 7, dob_year: 1991 },
  { name: "Luke", dob_day: 27, dob_month: 4, dob_year: 1984 },
  { name: "Ben", dob_day: 30, dob_month: 9, dob_year: 1985 },
  { name: "Sofie", dob_day: 28, dob_month: 4, dob_year: 1983 },
  { name: "Kim", dob_day: 1, dob_month: 2, dob_year: 1993 },
  { name: "Chris", dob_day: 29, dob_month: 4, dob_year: 1987 }
];

const today = { day: 28, month: 4, year: 2019 };

// 1.) complete the following function
// so line 27 always logs correct statements
// you get extra credit if your solution requires 
// only 1 if statement (without an else condition)
function getCurrentAge(person) {
  let age = today.year - person.dob_year;
  if (today.month <= person.dob_month || today.month > person.dob_month && today.day < person.dob_day || 
    today.day> person.dob_day) 
  {
    return age--;
  }
}

for (let person of allPersons) {
  console.log(person.name, "is", getCurrentAge(person), "years old.");
}

// 2.) change the following function 
// so the line 'oldestPerson = persons[i];' is only needed once
function getOldestPerson(persons) {
  let oldestPerson = persons[0];
  for (let i = 1; i < persons.length; i++) {
    if (persons[i].dob_year < oldestPerson.dob_year || persons[i].dob_year === oldestPerson.dob_year &&
    persons[i].dob_month < oldestPerson.dob_month || persons[i].dob_month === oldestPerson.dob_month &&
    persons[i].dob_day < oldestPerson.dob_day)    
    {
      oldestPerson = persons[i];
    } 
  }
  console.log("\n The oldest person is", oldestPerson.name);
}

getOldestPerson(allPersons);

