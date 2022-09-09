//.flat
let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

//.flatmap
let array = [1,2,3,4,5];
console.log(array.flatMap(value =>[value, value*2]));


//.trimStart
let hello = '               hello World';
console.log(hello);
console.log(hello.trimStart());


//.trimend
let hello = 'Hello World             ';
console.log(hello);
console.log(hello.trimEnd());


//fromEntries
let entries = [["name", "Nelson"], ["age", 32]];
console.log(Object.fromEntries(entries));


//Symbol
let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);