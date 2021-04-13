import React, { useState } from 'react';

import { useEffect } from 'react';
import './effects.css';
import { Message } from './Message';

export const SimpleForm = () => {
    
const [formState, setformState] = useState({
    name: "", 
    email: "",
})

const {name, email} = formState;

    useEffect(() => {
        console.log ("cambio el mail!")
        }, [email]);
        useEffect(() => {
            console.log ("cambio el nombre")
            }, [name]);
   
    const handleInputChange = ({target})=>{
        setformState({
            ...formState, 
            [target.name]: target.value,
            [target.email]: target.value
        });

    }

    return (
        <div>
            <h1>useEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="escriba su nombre"
                autoComplete= "off"
                value={name}
                onChange={handleInputChange}                
                />
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="escriba su email"
                autoComplete= "off"
                value={email}
                onChange={handleInputChange}                
                />
            </div>
            {(name === 'pablo') && <Message/>}
        </div>
    )
}
