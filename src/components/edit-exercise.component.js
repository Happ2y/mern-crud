import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";


class EditExercise extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);    /* TODO : id not accessible */
        axios.get('http://localhost:5000/exercises/' + this.props.match.params.id)
            .then((result) => {
                this.setState({
                    username: result.data.username,
                    description: result.data.description,
                    duration: result.data.duration,
                    date: new Date(result.data.date)
                })
            }).catch(err => console.log(err))

        axios.get('http://localhost:5000/users/')
            .then(result => {
                if (result.data.length > 0) {
                    this.setState({
                        users: result.data.map(user => user.username),
                    })
                }
            })
            .catch(err => console.log(err))
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        axios.post('http://localhost:5000/exercises/update/' + this.props.match.params.id, exercise)
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <h3>Update Exercise Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <select className="form-control" value={this.state.username} onChange={this.onChangeUsername} required>
                            {
                                this.state.users.map(function (user) {
                                    return (
                                        <option key={user} value={user}>{user}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" value={this.state.description} onChange={this.onChangeDescription} required />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes):</label>
                        <input type="text" className="form-control" value={this.state.duration} onChange={this.onChangeDuration} required />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <DatePicker selected={this.state.date} onChange={this.onChangeDate} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Exercise" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default EditExercise;