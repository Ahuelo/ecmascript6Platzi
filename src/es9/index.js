const obj = {
    name: 'Nelson',
    age: 30,
    country: 'CO',
};

let {name, ...all} = obj;
console.log(name, all);

//agregacion entre arrays con ... desde dentro de otro array
const obj = {
    name: 'Nelson',
    age:32
};
const obj1 = {
    ...obj,
    country: 'CO',
};

console.log(obj1);

//Finally
const helloWorld = () =>{
    return new Promise((resolve, reject) =>{
        (true)
        ? setTimeout (()=> resolve('Hello World!'), 3000)
        : reject (new Error ('test error'));
    });
}

helloWorld()
    .then (response => console.log(response))
    .catch (error => console.log(error))
    .finally(()=>console.log('Finalizó'))


//REGEX
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);