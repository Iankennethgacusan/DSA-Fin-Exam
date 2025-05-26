let numbers = prompt("Enter numbers (comma separated):").split(",").map(Number);
let names = prompt("Enter names (comma separated):").split(",").map(n => n.trim());

let combined = [];

// Store as objects for clarity
numbers.forEach(num => combined.push({ type: "number", value: num }));
names.forEach(name => combined.push({ type: "name", value: name }));

console.log("Combined Array of Objects:", combined);

// Extract and sort separately
let sortedNums = numbers.slice().sort((a, b) => b - a);
let sortedNms = names.slice().sort();

console.log("Sorted Numbers (High to Low):", sortedNums);
console.log("Sorted Names (A to Z):", sortedNms);
