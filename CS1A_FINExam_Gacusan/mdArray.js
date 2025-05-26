let names = prompt("Enter 5 names (comma separated):").split(",");
let ages = prompt("Enter 5 ages (comma separated):").split(",").map(Number);

let people = [];

for (let i = 0; i < names.length; i++) {
  let person = {
    name: names[i].trim(),
    age: ages[i]
  };
  people.push(person);
}

// Show the list of people with name and age
people.forEach(p => {
  console.log(`Name: ${p.name}, Age: ${p.age}`);
});
