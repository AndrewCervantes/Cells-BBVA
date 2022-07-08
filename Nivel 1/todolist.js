document.addEventListener('DOMContentLoaded', () => {
  const addTodoButton = document.querySelector('#add-todo')
  const todoList = document.querySelector('#active-todos')
  const todoToAdd = document.querySelector('#todo-to-add')

  axios
    .get('http://demo7460034.mockable.io/todos')
      // Destructuring
      // reponse.data = {data}
      //.then(( {data } ) => {
      //.then(( {data: {todos} } ) => {
      .then(response => {
        response.data.todos.forEach(todo => {
          todoList.insertAdjacentHTML(
            'afterend',
            `<li>${todo.entry}</li>`
          )
        })        
    })

    addTodoButton.addEventListener('click', (e) => {
      // Para prevenir el comportamiento default de un elemento
      // cuando reacciona a un evento, para nosotros manejarlo
      // por nuestra cuenta.
      //e.preventDefault()

      todoList.insertAdjacentHTML(
        'afterend',
        `<li class='todo'>${todoToAdd.value}</li>`
      )

      todoToAdd.value = ''

    })
})