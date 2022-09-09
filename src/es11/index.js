//importacion Dinámica
const btn = document.getElementById('btn');

btn.addEventListener('click', async function(){
    const module = await import('./file.js');
    module.hello();
});

//BigInt o n
const bigNumber = 9007199254740991n;
const anoterBigNumber = BigInt(9007199254740991);
console.log(bigNumber);
console.log(anoterBigNumber);


//Promisettled
const promise1 = new Promise((resolve, reject) => reject('reject'));
const promise2 = new Promise((resolve, reject) => resolve('resolve'));
const promise3 = new Promise((resolve, reject) => resolve('resolve 1'));

Promise.allSettled([promise1, promise2, promise3])
    .then(response=> console.log(response));


//Datos NULL
const fooo = null ?? 'default String';//dato nulo
const fooo2 = 'AMD' ?? 'default String';//dato no nulo
console.log (fooo);
console.log (fooo2);


//Optional chaining ?
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email){
    console.log('email');
} else {
    console.log('fail');
}