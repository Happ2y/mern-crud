import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Exercise Tracker</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/">Exercises</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/create">Create Exercise Log</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/edit">Edit Exercise</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/user">Create User</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;