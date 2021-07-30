import React, { Component } from 'react'

export default class MyForm2 extends Component {

    constructor(props) {
        super(props);

        this.inputName = React.createRef()

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        console.log(this.inputName.current.value)
        event.preventDefault(); //evitar o padrão do botao submit de enviar formulario
    }

    render() {
        const state = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <label >
                    Nome:
                    <input defaultValue='teste' type="text" name='name' ref={this.inputName} />
                </label>
                <input type="submit" />
                {console.log(this.inputName)}
            </form>

        );

    }
}