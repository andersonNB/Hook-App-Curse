import { useEffect, useReducer, useState } from "react";
import { todoReducer } from '../08-useReducer'

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};


const useTodo = () => {

    //dispatch cuando hay solo un reducer
    // si hay varios reducer en el mismo funtional component
    // se cambia el nombre por dispatchTodo
    // para hacer referencia de que esa función hace varias acciones
    // y estas van orientadas a cierto Reducer
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);



    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    // console.log("todos del reducer: ", todos);
    // console.log("dispatch: ", dispatch);

    const handleNewTodo = (todo) => {
        console.log(todo);

        let noRepetidas = false;


        todos.forEach((element) => {
            // console.log("forEach: ", element.description);
            if (element.description.includes(todo.description)) {
                noRepetidas = true;
                // return;
            }
        });

        if (!noRepetidas) {
            const addTodoAction = {
                type: "[TODO] Add Todo",
                payload: todo,
            };
            //Solo se le e nvia la acción
            dispatch(addTodoAction);
        }
    };

    const handleDeleteTodo = (id) => {
        console.log(id);

        dispatch({
            type: "[TODO] Delete Todo",
            payload: id,
        });
    };

    const handleToggleTodo = (id) => {
        console.log(id);

        dispatch({
            type: "[TODO] Toggle Todo",
            payload: id,
        });
    };


    const handleEditTodo = (id, texto) => {
        // console.log("useTodo: ", id, " texto: " + texto)

        dispatch({
            type: '[TODO] Edit Todo',
            payload: { id, texto }
        })

    }


    const pendingCount = () => {
        return todos.filter((todos) => !todos.done).length
    }


    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: pendingCount(),
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        handleEditTodo,
    }



}

export default useTodo