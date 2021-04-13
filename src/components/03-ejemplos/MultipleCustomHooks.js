import React from 'react'
import "../02-useEffect/effects.css"
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    
    const {loading,data } = useFetch (`https://www.breakingbadapi.com/api/quotes/5`);

    const {author, quote} = !!data&&data[0]; 
     /* al principio data es null, la simple negacion de un null es true, y la doble 
     negacion de un null es false, asi que estamos diciendo que si es falso no hace 
     nada y cuando es verdadero define quote y author con la data que viene de la api*/
    console.log (author, quote);
    return (
        <>
        <h1>BreakingBad frases celebres</h1>
            <hr/>
            {loading
            ?(
            <div className="alert alert-info text-center">
                loading...
            </div>
            ):(
                <blockquote className="blockquote text-right">
                <p className="mb-0">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            )}
        </>
    )
}
