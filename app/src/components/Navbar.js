import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import React from "react";


export default class Navbar extends React.Component{

    render() {
        return (
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/add'}>Add User</Link></li>
                <li><Link to={'/about'}>About</Link></li>
            </ul>
        )
    }
}