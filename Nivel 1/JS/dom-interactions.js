const numbers = [1,2,3];
const moreNumbers = [...numbers,4, 5,6,7];

console.log(moreNumbers);

//Objetos
const numberOne = {
    value: 1,
    name: 'one',
    previousSeries: [0,-1,-2],
    previousNumber: {value: 0, name: 'zero'}
}

//Nos devuelve las claves
console.log(Object.keys(numberOne));
//Nos devuelve los valores
console.log(Object.values(numberOne));
//Nos devuelve todo el objeto
console.log(Object.entries(numberOne));

//Otra forma de imprimir los datos del objeto.
for ( let prop in numberOne){
    console.log(numberOne[prop]);
}

const keys = Object.keys(numberOne);
 keys.forEach(prop => {
        console.log(prop);
 });