import React, { useState, useEffect } from 'react'

export const Message = () => {
const [coordenadas, setcoordenadas] = useState({x: 0, y: 0})
const {x,y} = coordenadas
    

useEffect(() => {
        const mouseMove= (e) =>{
            const coordenadas = {x: e.x, y: e.y};
            setcoordenadas(coordenadas);
        }
        window.addEventListener ('mousemove', mouseMove);
        
        return () => {
        window.removeEventListener('mousemove',  mouseMove);
        }
    }, [])
    return (
        <>
          <h3>Que lindo nombre</h3>  
          <p>x:{x} y:{y}</p>
        </>
    )
}
