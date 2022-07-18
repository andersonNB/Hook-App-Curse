import { useEffect, useState } from 'react'

const useFetch = (url) => {

    //UNa forma pero de esta manera debemos utilizar la función en alguna parte
    // ya sea en un effect o en otro archivo

    // const fetchApi = async () => {

    //     const peticion = await fetch(url)
    //         .then((res) => res.json())
    //         .then((res) => console.log(res))



    // }

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async () => {


        setState({
            ...state,
            isLoading: true,
        })

        const resp = await fetch(url)
        const data = await resp.json()
        console.log("useFetch: ", data)

        // se puede abreviar
        // data: data -> data
        setState({
            data,
            isLoading: false,
            hasError: null,
        })
    }


    //Utilizamos el useEffect por que nuestra petición http sera cambiante
    useEffect(() => {
        getFetch()
    }, [url])

    // Se puede hacer así 
    // return {

    //     data: state.data,
    //     isLoading: state.isLoading,
    //     hasError: state.hasError,
    // }
    // o así 
    return state

}

export default useFetch