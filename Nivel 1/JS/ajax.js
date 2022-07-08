document.addEventListener('DOMContentLoaded', () =>{
    axios
        .get('http://demo7460034.mockable.io/todos')
        /*   DEstructuring
        response.data = {data}
        .then(({data}) => {
        .then(({data : {todos} } )  => {           
        */
        .then((response) =>{
            console.log(response.data.todos)
            //Objeter el elemento que trae el id #Todos
            let todoList = document.querySelector('#todos')
            //Agregar datos de una petición.
            todoList.insertAdjacentHTML(
                'afterend',
                `<li>${response.data.todos[0].entry}</li>`
            )

        })
});