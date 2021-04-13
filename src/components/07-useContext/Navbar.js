import React from 'react'
import {Link, NavLink} from 'react-router-dom'
export const Navbar = () => {
    return (
       /*  <nav>
            <ul>
                <li> <Link to="./"> Home </Link></li>
                <li> <Link to="./login"> Login </Link></li>
                <li> <Link to="./about"> Abaut </Link></li>  
            </ul>
        </nav> */

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="./">Menú</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink exact activeClassName="active" className="nav-link" to="./">Home</NavLink>       
                    <NavLink exact activeClassName="active" className="nav-link" to="./login">Login</NavLink>
                    <NavLink exact activeClassName="active" className="nav-link" to="./about">Abaut</NavLink>
                </ul>
            </div>
        </nav>
    )
}



