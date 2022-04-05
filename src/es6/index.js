function newFunction(name, age, country)
{
    var name = name || 'oscar';
}
//es6 valores por default
function newFunctionEs6(name = 'Oscar', age=20, country='CO'){
    console.log(name,age,country);
}
newFunctionEs6();
newFunctionEs6('Edisson');

//Template literals cambian las comilla
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multiline
let lorem = "Cualquier tipo de frase \n"
    + "continuacion de la frase";
console.log(lorem);
let lorem2 = `otra frase epica que necesitamos
    ahora es otra frase`;
console.log(lorem2);

//Estructuracion de elementos
let person = {'name':'Edisson','age':'32','country':'CO'};
console.log(person.name, person.age, person.country);

let { name, age } = person;
console.log(name, age);

//Operador de propagacion. Une elemn
let team1=['Edisson','Nico','Vale'];
let team2=['Luz','Jorge','Ramiro'];

let education = ['David', ...team1, ... team2];
console.log(education);

//let y const

//Propiedad de objetos mejorada
let name1 = 'Edisson';
let age1 = 50;

//ES5
obj1 = {name:name1, age:age1};
//ES6
obj2 = { name1, age1};

//Arrow functions
const names=[{name:'Edisoft', age:50},
            {name:'Nico',age:21}];

            //ES5
let listOfNames = names.map(function(element){
    console.log(item.name);
});
//ES6
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age, country) => {
};
const listOfNames4 = name=>{};
const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) =>{
        if (true)
        {
            resolve('Hey');
        }
        else {
            reject('Ups');
        }
    }
    );
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//Clases
class calculator{
    constructor(){
        this.valueA = 0;
        this.ValueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.ValueB = valueB;

        return this.ValueA + this.ValueB;
    }
}

const calc = new calculator();
console.log (calc.sum(2,2));

//Import y export
import {jello} from './module';

hello();

//Generators
function* helloWorld(){
    if (true){
        yield 'Hello, ';
    }
    if (true){
        yield 'World';
    }
};
const generatorHello = helloWorld();
console.log (generatorHello.next().value);
console.log (generatorHello.next().value);
console.log (generatorHello.next().value);
