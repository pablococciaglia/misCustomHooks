import React from 'react'

export const ShowIncrement = React.memo(({incremento}) => {
    console.log("me volvi a generar")
    return (
        <button
            className = "btn btn-primary"
            onClick={()=>{
                incremento();
            }}
        >+1</button>
    )
})
