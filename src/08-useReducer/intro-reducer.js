console.log('Reducer')

const initialState = [{
    id: 1,
    todo: "Recoger la piedra del Alma",
    done: false,
}]

const todoReducer = (state = initialState, action = {}) => {

    if (action.type === "[TODO] add todo") {
        // Así
        // state = [...state, action.payload]
        //o así 
        return [...state, action.payload]
    }

    return state
}


let todos = todoReducer();

console.log(todos)


//Creamos el objeto a enviar

const newTodo = {
    id: 2,
    todo: "Recoger la gema del poder",
    done: false
}

// Creamos la acción que hara nuestro reducer

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}


todos = todoReducer(todos, addTodoAction)

console.log(todos)

