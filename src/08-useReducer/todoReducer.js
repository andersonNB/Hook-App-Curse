const todoReducer = (initialState = [], action) => {

    // console.log("initial, state", initialState)
    switch (action.type) {
        case '[TODO] Add Todo':

            return [...initialState, action.payload]

        case '[TODO] Delete Todo':
            return initialState.filter((todo) => todo.id != action.payload)

        case '[TODO] Toggle Todo':

            return initialState.map((todo) => {

                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }

                }
                return todo
            })

        case '[TODO] Edit Todo':
            return initialState.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        description: action.payload.texto,
                        done: false,
                    }
                }
                return todo
            })
        //LE podemos esta excepción por si al momento de hacer la logica
        // nos evite creer que algo esta funcionando cuando en realidad
        // aun no se a terminado
        // throw new Error('Action.type = ABC no esta implementada')
        default:
            return initialState
    }

}

export default todoReducer