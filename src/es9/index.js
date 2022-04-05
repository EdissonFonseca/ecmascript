//Operador de reposo. Obtiene caracteristicas de un objeto que no se ha construido
const obj = {
    name: 'Edisoft',
    age: 50,
    country: 'CO',
}

let {country, ...all} = obj;
console.log(all);

//Unir varios elementos de objetos a un nuevo elemento
const obj1 = {
    name: 'Edisoft',
    age: 50
}

const obj2 = {
    ...obj1,
    country: 'CO'
}

console.log(obj2);

//Promise.finally
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject (new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log('Finalizo'))

//Regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-04-04');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
