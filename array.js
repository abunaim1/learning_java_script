var human = ["rahim","karim","jabbar","rocket", "rastructure",];

console.log(human);
console.log(human[0]);
console.log(human.length);

human.push("rasel");
console.log(human);

human.pop();
console.log(human);

//to add a element in the beginning
human.unshift("salam");
console.log(human);

//to pop a element in the beginning
human.shift();
console.log(human);

// slicing
console.log(human.slice(0,3));

//indext of
console.log(human.indexOf("rocket"));

// reverse the elements
console.log(human.reverse());

