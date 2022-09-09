//ENTRIES AND LENGTH
const data = {
    frontend: 'Nelson',
    backend: 'Isabel',
    design: 'Ana'
}
const entries = Object.entries(data);
console.log (entries);

//VALUES
const data = {
    frontend: 'Nelson',
    backend: 'Isabel',
    design: 'Ana'
}
const values = Object.values(data);
console.log(values);

//PADDING
const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, '---'));

//ASYNC
const helloWorld = () => {
    return new Promise((resolve, reject)=>{
        (true)
        ? setTimeout(()=> resolve('Hello WOrld'), 3000)
        : reject(new Error('Test Error'));
    })
};

const helloAsync = async () =>{
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();