
/* */
const value1Division = 10;
const value2Division = 20;

/* IFEs (ImmediatlyInvoked Function Expression)*/
((value1Suma, value2Suma) => {
    const value1Multiplicacion = 5;
    const value2Multiplicacion = 5;

    /*Function Calculator Expresión de función */
    const calculator = function(operation, value1, value2){
        return operation(value1,value2);
    }

    /* Suma Arrow function */
    const suma = (value1,value2) =>{
        return value1 + value2;
    }

    /* Resta onliner*/
    const resta = (value1,value2) => value1-value2;

    /* Divición Función declarada */
    function division (value1,value2){
        return value1 / value2;
    }

    /* Multiplicación*/ 
    const multiplicacion = (value1, value2) => {
        return value1 * value2;
    }


    /* Promesas */
    const sumaPromise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Suma " + calculator(suma,value1Suma,value2Suma));
        }, 200);
    });

    const  restaPromise = new Promise((resolve, reject) => {
        let value1Resta = 20;
        let value2Resta = 30;
        setTimeout(() =>{
            resolve("Resta " + calculator(resta,value1Resta,value2Resta));
        }, 200);
    });

    const divisionPromise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Division " + calculator(division,value1Division,value2Division));
        }, 200);
    });

    const multiplicacionPromise = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Multiplicacion " + calculator(multiplicacion,value1Multiplicacion, value2Multiplicacion));
        }, 200);
    });



    Promise
        .all([restaPromise, sumaPromise, divisionPromise, multiplicacionPromise])
        .then(response => {
            console.log(response);
        })
        .catch(err =>{
            console.log("Huno un Eror");
        })
})(10,10);









/*
console.log("Suma "+ calculator(suma,10,10));
console.log("Resta "+ calculator(resta,50,10));
console.log("División "+ calculator(division,50,10));
console.log("Multiplicaión "+ calculator(multiplicacion,20,4));
*/