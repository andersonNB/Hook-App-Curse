import { useState } from "react"


const useCounter = (initialValue = 10) => {

    // console.log(initialValue)
    const [counter, setCounter] = useState(initialValue)


    const handelAdd = () => {

        setCounter(counter + 1)
    }

    function handleSubs(value) {

        setCounter(counter - value)
    }

    const hardReset = () => {

        setCounter(initialValue)
    }

    //retornamos siempre lo que vamos a utilizar
    return {
        counter,
        handelAdd,
        handleSubs,
        hardReset,
    }
}

export default useCounter