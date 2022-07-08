/*Evento para que el documento cargue bien */
document.addEventListener('DOMContentLoaded', ()=>{
    /* Obtener un elemento por id*/
    const special = document.getElementById('special'); 
    console.log(special);
    
    /* Obtener un elemento por Clase*/
    const regulars = document.getElementsByClassName('regular'); 
    console.log(regulars);

    /* Obtener un elemento por Tag*/
    const paragraph = document.getElementsByTagName('p'); 
    console.log(paragraph);

    /***** Recomendados para usar  *****/

    /*Metódo flexible de JQUERY  ID*/
    const betterSpecial = document.querySelector('#special');
    console.log(betterSpecial);

    /*Metódo flexible de JQUERY  Class solo trae el primer elemento de la clase*/
    const betterRegular = document.querySelector('.regular');
    console.log(betterRegular);

    /*Metódo flexible de JQUERY  Class */
    const betterRegulars = document.querySelectorAll('.regular');
    console.log(betterRegulars);

    /*Metódo flexible de JQUERY  ID*/
    const betterParagraph = document.querySelector('p');
    console.log(betterParagraph);
});