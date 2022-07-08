document.addEventListener('DOMContentLoaded', () =>{
    //Objeter el elemento que trae el id #Todos
    const todoList = document.querySelector('#active-todos')
    const todoToAdd= document.querySelector('#todo-to-add')
    const addTodoButton = document.querySelector('#add-todo')

    axios
        .get('http://demo7460034.mockable.io/todos')
        /*   DEstructuring
        response.data = {data}
        .then(({data}) => {
        .then(({data : {todos} } )  => {           
        */
        .then((response) =>{
            console.log(response.data.todos)
            //Agregar datos de una petición.
            response.data.todos.forEach(todo => {
                todoList.insertAdjacentHTML(
                    'afterend',
                    `<li>${todo.entry}</li>`
                )
            })
        })
        /* Eleme */
        addTodoButton.addEventListener('click')
});