import React, { Component } from 'react'

export default class MyForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        const state = this.state

        return (
            <form action="">
                <label >
                    Nome:
                    <input type="text" name='name' value={state.name} onChange={this.handleChange} /> {state.name}
                </label>
                <input type="submit" />

            </form>
        );

    }
}