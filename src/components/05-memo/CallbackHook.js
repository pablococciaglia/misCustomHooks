import React, { useCallback, useState } from 'react';
import "../02-useEffect/effects.css";
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [contador, setcontador] = useState(10)

    const incremento = useCallback(
        () => {
            setcontador( c => c + 1 )
        },
        [setcontador],
    )
    return (
        <>
            <h1>CallbackHook: {contador}</h1>
            <hr/>
            <ShowIncrement incremento={incremento}/>
        </>
    )
}
