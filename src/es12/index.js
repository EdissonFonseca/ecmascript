//Replace all
const  string = "JavaScript es maravilloso, con JavaScript podemos construir el futuro de la web";
const replacedString = string.replace("JavaScript","Python");
console.log(replacedString);

const replacedString2 = string.replaceAll("JavaScript","Python");
console.log(replacedString2);

//Metodos privados
class Message{
    #show(val){
        console.log(val);
    }
    get #add(val){

    }
    set 
}
const message = new Message();
message.show("Hola!");

//Promise Any
const promise1 = new Promise((resolve,reject)=> reject("1"));
const promise2 = new Promise((resolve,reject)=> resolve("2"));
const promise3 = new Promise((resolve,reject)=> resolve("3"));

Promise.any([promise1, promise2, promise3])
.then(response => console.log(response));

//Weak ref
class AnyClass{
    constructor(element){
        this.ref = new WeakRef(element)
    };
}
