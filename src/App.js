import React, { Component } from 'react';
import './App.css';
import ListDisplay from './components/list-display';
import ListInput from './components/list-input';

class App extends Component {
    state = {
        tasks: [],
    };

    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    addTask(value) {
        this.setState({
            tasks: [...this.state.tasks, value],
        });
    }

    deleteTask(idx) {
        const array = [...this.state.tasks];
        array.splice(idx, 1);
        this.setState({
            tasks: array,
        });
    }

    render() {
        return (
            <div className="App">
                <h1>To Do List</h1>
                <ListDisplay tasks={this.state.tasks} delete={this.deleteTask} />
                <ListInput addTask={this.addTask} />
            </div>
        );
    }
}

export default App;
