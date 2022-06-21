import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const Exercise = props => (
    <tr>
        <td>{props.exercise._id}</td>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>{props.exercise.date}</td>
        <td>
            <Link className='btn btn-primary' to={"/edit/" + props.exercise._id}>Edit</Link> | <button className='btn btn-danger' onClick={() => { props.deleteExercise(props.exercise._id) }}>Delete</button>
        </td>
    </tr>
);

class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);

        this.state = {
            exercises: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(result => {
                this.setState({
                    exercises: result.data,
                })
            })
            .catch(err => console.log(err))
    }

    deleteExercise(id) {
        axios.delete(`http://localhost:5000/exercises/${id}`)
            .then(result => console.log(result.data))
            .catch(err => console.log(err))

        this.setState({
            exercises: this.state.exercises.filter(element => element._id !== id)
        })
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.exercises.map(currentExercise => {
                            return (
                                <Exercise exercise={currentExercise} deleteExercise={this.deleteExercise} key={currentExercise._id} />
                            )
                        })
                    }
                </tbody>
            </table>
        );
    }
}

export default ExerciseList;