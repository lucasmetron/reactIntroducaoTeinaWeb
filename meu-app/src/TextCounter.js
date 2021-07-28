import React, { Component } from 'react';

class TextCounter extends Component { //aqui dentro é criado as variaveis

    static defaultProps = { // serve para setar valores inicias para variaveis
        limit: 15
    }

    constructor(props) {
        super(props);
        this.limit = props.limit
        this.state = {
            totalChars: 0, //variavel
            text: '',
        }

        this.handleChange = this.handleChange.bind(this) //bind é para passar o componente (this) pra dentro da function
    }

    handleChange(event) {
        const element = event.target,
            text = element.value

        if (text.length <= this.props.limit) {
            this.setState({
                totalChars: text.length,
                text: text,
            })
        }

    }

    render() {
        const { state, props } = this // apenas para nao ficar ditando this.state toda hora

        return (
            <div>
                <h1>Meu Contador</h1>
                <textarea onChange={this.handleChange} name="" id="" cols="30" rows="10" value={state.text} />
                <div>
                    <strong>Total:</strong> {state.totalChars} / {props.limit}
                </div>
            </div>
        );
    }
}


export default TextCounter;