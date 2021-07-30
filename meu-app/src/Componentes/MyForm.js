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

        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
    }

    handleChange1(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleChange2(event) {
        this.setState({
            message: event.target.value
        })
    }

    handleChange3(event) {
        this.setState({
            fruit: [this.state.fruit, event.target.value]
        })
    }

    render() {
        const state = this.state

        return (
            <form action="">
                <label >
                    Nome:
                    <input type="text" value={state.name} onChange={this.handleChange1} /> {state.name}
                </label>
                <br />
                <label >
                    Mensagem:
                    <textarea value={state.message} onChange={this.handleChange2} /> {state.message}
                </label>
                <input type="submit" />
                <br />
                <label >
                    Fruta:
                    <select value={state.fruit} onChange={this.handleChange3}>
                        {
                            this.fruits.map(fruit => <option value={fruit.value}>{fruit.name}</option>)
                        }
                    </select>
                    {console.log(state.fruit)}
                </label>
            </form>
        );

    }
}