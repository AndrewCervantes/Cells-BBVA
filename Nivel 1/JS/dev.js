
const x = 10;

const hola = function(){
    let x = 100;
    console.log(x);
}
console.log(x);
hola(x);S
console.log(x);



/* Recomendaciones
"" -- html
'' -- JS
´´ -- JS ctrl + alt + }
*/

/* Funciones */

/*Ejemplos de funciones
Función declara */
function greet (name){
    return `hola ${name}`;
}

//Expresión de función
const greet = function(name){
    return `hola ${name}`;
}

//Expresion de funcion (modo arrow function, obligatorio si uso 2 o más argumento)
const greet = (name) => {
    return `hola ${name}`;
}

//expresion de funcion (1 solo argumento)
const greet = name => {
    return `hola ${name}`;
}

//Expresion de función (modo oneliner)
const greet = name =>  `hola ${name}`;

greet('Christian');



//Callbacks
const createPersonalizedGreeting = (person, callback) => {
    const newGreeting = `Hola ${person}`;
    callback(newGreeting);
}

const personalizedGreeting = (greeting) => {
    console.log(greeting);
}

createPersonalizedGreeting('Amet', personalizedGreeting);


//Clousures


//IIFE = Immediatly Invoked Function Expression
this.name ='Chris';
(context => {
    console.log(context.name)
})(this);


//Promesas
const promise = new Promise((resolve, reject) =>{
    if (true){
        resolve('Well done');
    }
    reject('Bad call');
})

promise
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.error(err)
    })


//Multiples promesasas
const firstpromise = new Promise((resolve, reject) =>{
    if (true){
        resolve('First romise result');
    }
    reject('Bad call');
})

const secondpromise = new Promise((resolve, reject) =>{
    if (true){
        resolve('Second romise result');
    }
    reject('Bad call');
})
const thirdpromise = new Promise((resolve, reject) =>{
    if (true){
        resolve('Third romise result');
    }
    reject('Bad call');
})

Promise
    .all([firstpromise,secondpromise, thirdpromise])
    .then(response => {
        console.log(responses);
    })
    .catch(err =>{
        console.log(err);
    })