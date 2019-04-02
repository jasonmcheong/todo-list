import React from 'react';

class ListInput extends React.Component {
    state = {
        task: '',
    };

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            task: evt.target.value,
        });
    }

    handleSubmit() {
        if (this.state.task) {
            this.props.addTask(this.state.task);
            this.setState({
                task: '',
            });
        }
    }

    render() {
        return (
            <div className="user-input">
                <input
                    type="text"
                    onChange={evt => this.handleChange(evt)}
                    value={this.state.task}
                    placeholder="Enter a task"
                />
                <button className="btn" onClick={this.handleSubmit}>
                    <span>Add Task</span>
                </button>
            </div>
        );
    }
}

export default ListInput;
