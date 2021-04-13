import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    
    const componenteEnFuncionamiento = useRef(true)
    const [state, setstate] = useState({ data:null, loading: true, error: null });
        
    useEffect ( () => {
        return  () => {
            componenteEnFuncionamiento.current=false;
        }
    }, [])
    
    
    useEffect(() => { 

        setstate({ data: null, loading: true, error: null });

        fetch( url )
            .then( respuesta => respuesta.json() )
            .then ( data => {

                if (componenteEnFuncionamiento.current){
                    setstate({
                        loading: false,
                        error: null,
                        data
                    })
                }
                
            });
    }, [url])
    return state;
}