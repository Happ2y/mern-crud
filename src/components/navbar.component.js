import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Exercise Tracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Exercises</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create">Create Exercise Log</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/edit">Edit Exercise</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/user">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;