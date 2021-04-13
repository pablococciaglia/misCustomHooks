import React, { useState } from 'react';
import './counterApp.css';
export const CounterApp = () => {
    const [{contador1, contador2}, setcontador] = useState({contador1 : 10, contador2:20}) ;
    const objetoConValores = {contador1, contador2}
    return (
        <>
        <h1>contador 1 {contador1} </h1>  
        <h1>contador 2 {contador2} </h1>  
        <hr/>
        <button className="btn btn-primary"
        onClick={()=>{
            setcontador ({
                ...objetoConValores,
                contador1:contador1+1})
        }}>
            +1
        </button>


        </>
    )
}
