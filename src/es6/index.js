//After ES6
function newFunction (name, age, country){
    var name = name || 'Ivan';
    var age = age || 32;
    country = country || "CO";
    console.log(name, age, country);
}
newFunction();

//ES6
//Before ES6
function newFunction2 (name = "Ivan", age = 30, country = "CO"){
    console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", "29", "CO");

//Template Literals
//After ES6
let hello = "Hello";
let world = "World";
let epciPhrase = hello +" "+ world;
console.log(epciPhrase);

//Before ES6
let epciPhrase2 =`${hello} ${world}`;
console.log(epciPhrase2);

//MULTILINEA
//After ES6
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem \n" + "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."  

//Before ES6
let lorem2 =`Otra Frase Épica que necesitamos

ahora es otra frase épica`;

console.log(lorem);
console.log(lorem2);
