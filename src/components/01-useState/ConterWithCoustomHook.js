import React from 'react'
import "./counterApp.css"
import { useCounter } from '../hooks/useCounter'
export const ConterWithCoustomHook = () => {
       const {state, incremento, decremento, reseteo} = useCounter(0)
    return (
        <div>
            <h1>conter with hook: { state }</h1>
            <button onClick = {()=>incremento(2)} className = "btn btn-primary">+1</button>
            <button onClick = {()=>decremento(3)} className = "btn btn-primary">-1</button>
            <button onClick = {reseteo} className = "btn btn-primary">reset</button>
        </div>
    )
}


