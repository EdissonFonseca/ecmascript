//Object.entries

const data={
    frontend: 'Edisoft',
    backend: 'Isabel',
    design: 'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

//Object values
const data1={
    frontend: 'Edisoft',
    backend: 'Isabel',
    design: 'Ana'
}
const values = Object.values(data1);
console.log(values);

//Padding
const string = "hello";
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'---'));

//async y await
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false)
        ? setTimeout(() => resolve('Hello World'), 3000)
        :reject(new Error('Test error'))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

//
const anotherFunction = async() => {
    try{
        const hello = await helloWold();
        console.log(hello);
    }
    catch (error) {
        console.log(error);
    }
}

anotherFunction();
