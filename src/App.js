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
    }

    addTask(value) {
        this.setState({
            tasks: [...this.state.tasks, value],
        });
    }

    render() {
        return (
            <div className="App">
                <h1>To Do List</h1>
                <ListDisplay tasks={this.state.tasks} />
                <ListInput addTask={this.addTask} />
            </div>
        );
    }
}

export default App;
