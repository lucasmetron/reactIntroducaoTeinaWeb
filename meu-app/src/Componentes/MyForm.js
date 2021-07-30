import React, { Component } from 'react'

export default class MyForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            message: '',
            fruit: 'laranja',
        }

        this.fruits = [
            { 'name': 'Banana', 'value': 'banana' },
            { 'name': 'Maca', 'value': 'maca' },
            { 'name': 'Laranja', 'value': 'laranja' },
        ];

        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name;
        this.setState({
            [name]: value
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
                <br />
                <label >
                    Mensagem:
                    <textarea value={state.message} name='message' onChange={this.handleChange} /> {state.message}
                </label>
                <input type="submit" />
                <br />
                <label >
                    Fruta:
                    <select value={state.fruit} name='fruit' onChange={this.handleChange}>
                        {
                            this.fruits.map((fruit, i) => <option key={i} value={fruit.value}>{fruit.name}</option>)
                        }
                    </select>
                    {state.fruit}
                </label>
            </form>
        );

    }
}