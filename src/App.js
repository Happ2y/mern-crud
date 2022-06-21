import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

class App extends Component {
	render(){
		return (
			<div className='container'>
				<Router>
					<Navbar />
					
					<Routes>
						<Route exact path='/' element={< ExerciseList />} ></Route>
						<Route path='/create' element={< CreateExercise />}></Route>
						<Route path='/edit/:id' element={< EditExercise />}></Route>
						<Route path='/user' element={< CreateUser />}></Route>
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;