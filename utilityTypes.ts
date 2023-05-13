// type Todo = {
//     title: string,
//     description: string
// }

interface Todo {
    title: string,
    description: string
}

const todo1: Todo = {
    title: "Todo title",
    description: "Todo description"
}   

type PartialTodo = Partial<Todo>

const todo2: PartialTodo = {
    title: "Todo title",
    // description: "Todo description",
    todoID: 12
}   

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>)  {
    return {...todo, ...fieldsToUpdate}
}



