import React, { Component } from 'react';
import './App.css';
import ListDisplay from './components/list-display';
import ListInput from './components/list-input';

let tasks = 'tasks';

class App extends Component {
    state = {
        tasks: [],
    };

    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();
    }

    // Used to retrieve local storage data and update the list-display
    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let tasks in this.state) {
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(tasks)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(tasks);
                let array = value.split(',');
                this.setState({
                    tasks: array,
                });
            }
        }
    }

    // Adding the task from list-input
    addTask(value) {
        let add = [...this.state.tasks, value];
        this.setState({
            tasks: add,
        });
        localStorage.setItem(tasks, add);
    }

    // Deleting the task from list-display
    deleteTask(idx) {
        const array = [...this.state.tasks];
        array.splice(idx, 1);
        this.setState({
            tasks: array,
        });
        localStorage.setItem(tasks, array);
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
