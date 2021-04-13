import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {
    const handleClick= ()=>{
        setuser ({});
    }
    const { user, setuser} = useContext(UserContext);
    return (
        <>
            <h1>About Screen</h1>
            <hr/>
            <button className="btn btn-danger"
            onClick={handleClick}>logout</button>
        </>
    )
}
