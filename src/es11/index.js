//Dynamic import
const button = document.getElementById("btn");

button.addEventListener("click",async function(){
    const module = await import("./file.js");
    module.hello();
});

//BigInt
const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

//Promise all --Se cumple si todas las promesas anteriores se cumplieron
//Promise allSetled se cumple cuando todas terminan independiente del resultado
const promise1 = new Promise((resolve,reject) => reject ("reject 1"));
const promise2 = new Promise((resolve,reject) => resolve ("resolve 2"));
const promise3 = new Promise((resolve,reject) => resolve ("resolve 3"));

Promise.allSettled([promise1, promise2, promise3])
.then(response => console.log(response));

//Global this
console.log(window);
console.log(globalThis);

//Operador nulo
const fooo = null ?? 'default string';
console.log(fooo);

//Optional 
const user= {};
console.log(user?.profile?.email);
if (user?.profile?.emal){
    console.log('email');
}
else {
    console.log('not email');
}