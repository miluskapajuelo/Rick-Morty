import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Nabvar.css';
import logo from '../images/logo.svg';

function Nabvar() {
    return (
        <div className="Navbar">
            <div className="container_fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo" src={logo} alt="Logo" />
                    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold">Conf</span>
                </Link>
            </div>

        </div>
    )
}

export default Nabvar
