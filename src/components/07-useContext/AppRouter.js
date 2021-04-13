import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Navbar } from './Navbar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';


export const AppRouter = () => {
    return (
        <div>
            <Router>
                <div>
                    <Navbar/>
                    <Switch>
                        <Route exact path="/about" component = {AboutScreen}/>
                        <Route exact path="/login" component = {LoginScreen}/>
                        <Route exact path="/" component = {HomeScreen}/>
                        <Route component = {HomeScreen}/> {/* seria como el default, asi que si escriben cualquier ruta que no coincida cae acá */}
                    </Switch>
                </div>
            </Router>
        </div>
    )
}
