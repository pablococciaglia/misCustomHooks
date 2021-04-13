import React, {useContext} from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {
    const { user, setuser} = useContext(UserContext);

    return (
        <>
            <h1>Login Screen</h1>
            <hr/>
            <button 
            className="btn btn-primary"
            onClick={()=>setuser ({
                id: 132,
                name: "pablo",
            })}>login</button>
        </>
    )
}
