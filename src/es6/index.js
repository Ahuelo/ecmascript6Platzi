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

//Objetos con ES6
//After ES6
let person = {
    'name': 'Oscar',
    'age': 32,
    'country': 'CO'
}
console.log(person.name, person.age, 'after ES6');

//Before ES6
let {name, age} = person;
console.log(name, age, 'Before ES6');

//ARRAYS
//After ES6
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jesica', 'Camila'];
let education = ['David','Oscar', 'Julian', 'Ricardo', 'Valeria', 'Jesica', 'Camila'];//se baja manualmente
//Before ES6
let education2 = ['David', ...team1, ...team2];//con los ...y el arrays se une auto
console.log(education);

//After ES6
let name = 'Nelson';
let age = 30;
obj = { name:name , age:age};
console.log(obj);

//Before ES6
obj2 = {name, age};
console.log(obj2);

//Array function
//After ES6
const  names = [
    {
        name:'Nelson', age: 32
    },
    {
        name:'Yesica', age: 27
    }
];
let listOfNames = names.map(
    function(item){
        console.log(item.name);
    }
)

//Before ES6
let listOfNames2 = names.map(item => console.log(item.name));
//mas variables de array function
const listOfNames3 = (name, age, country)=>{
    ...
}

//PROMESAS
//After ES6

const helloPromise = ()=>{
    return new Promise ((resolve, reject) =>{
        if(true){
            resolve('Hey!');
        }else{
            reject('Ups!');
        }
    });
}
helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('hola'))
    .catch(error => console.log(error));


//CLASES
class calculator {
    constructor(){
        this.valueA =0;
        this.valueB =0;
    }
    suma(valueA, valueB){
        this.valueA =valueA;
        this.valueB =valueB;
        return this.valueA + this.valueB;
    }
}
const calc = new calculator();
console.log(calc.suma(2,2));

//MODULOS
import {hello} from "./module";
console.log(hello());


//GENERATORS
function* helloworld(){
    if (true){
        yield 'hello';
    }
    if (true)'World';
}


const generatorHello =helloworld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);