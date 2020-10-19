import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../logo.svg';

function NavbarLine() {
    return (
        <>
            <section>
                <div className="container-fluid nav_bar">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <nav className="navbar navbar-expand-lg">
                                <NavLink className="navbar-brand " to="/"><img src={ logo } alt="india" /></NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/destination">Destination</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/experience">Experiences</NavLink>
                                        </li> 
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/travel">Travel</NavLink>
                                        </li>                                                   
                                    </ul>
                                    <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                            <NavLink className="nav-link" to="/">Login <span className="sr-only">(current)</span></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NavbarLine;
