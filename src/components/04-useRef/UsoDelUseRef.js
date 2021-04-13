import React, { useState } from 'react'
import "../02-useEffect/effects.css"
import { MultipleCustomHooks } from '../03-ejemplos/MultipleCustomHooks'
export const UsoDelUseRef = () => {

    const [show, setshow] = useState(false);
    
    
        return (
            <>
                <h1>uso del useRef</h1>
                <hr/>
                <button
                    className="btn btn-primary mt-5"
                    onClick={()=>{
                        setshow(!show);
                    }}
                >
                    Show/Hide
                </button>
                {show && <MultipleCustomHooks/>}
                
                
            </>
        )
}
