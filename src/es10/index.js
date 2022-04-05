//Flat -- profundidad
let array=[1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(2));

//Flat map
let array1=[1,2,3,4,5];
console.log(array1.flatMap(value =>[value, value*2]));

//TrimStart
let hello='    hello world';
console.log(hello.trimStart());

//TrimEnd
let hello2 = 'hello world     ';
console.log(hello2.trimEnd());

//Optional catch building
try{

} catch{
    // Se puede usar error como valor por defecto 
}

//Object form entries
let entries = [["name","Luz"],["age",32]];
console.log(Object.fromEntries(entries));

//
let mySymbol = 'My symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);
