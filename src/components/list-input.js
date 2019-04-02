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
        this.props.addTask(this.state.task);
        this.setState({
            task: '',
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={evt => this.handleChange(evt)} value={this.state.task} />
                <button className="btn" onClick={this.handleSubmit}>
                    + Add Task
                </button>
            </div>
        );
    }
}

export default ListInput;
