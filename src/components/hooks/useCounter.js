import { useState } from "react"


export const useCounter = (initialState=10) => {
const [state, setstate] = useState(initialState)
const incremento = (parametro)=>{
    setstate (state+parametro)
}
const decremento = (parametro)=>{
    setstate (state-parametro)
}
const reseteo = ()=>{
    setstate (initialState)
}
return{
    state,
    incremento,
    decremento,
    reseteo
}
}
