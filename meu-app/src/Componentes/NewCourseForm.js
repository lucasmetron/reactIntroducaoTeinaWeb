import React, { Component } from 'react'

export default class NewCourseForm extends Component {
    static defaultProps = {
        categories: [],
        onsubmit: () => { }
    }

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            category: [{}],
            image: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const newCourse = this.state;

        if (newCourse.name && newCourse.image && newCourse.category) {
            this.props.onSubmit(newCourse)
            this.setState({
                name: '',
                image: '',
            })
        }
    }

    handleChange(event) {
        const target = event.target,
            name = target.name,
            value = target.value == "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value,
        })
    }

    render() {
        const { props, state } = this
        { console.log(this) }
        return (
            <form className='course-form' onSubmit={this.handleSubmit}>
                <label>
                    <span>Nome: </span>
                    <input name='name' value={state.name} onChange={this.handleChange} />
                </label>

                <label>
                    <span>Imagem: </span>
                    <input name='image' value={state.image} onChange={this.handleChange} />
                </label>

                <label>
                    <span>Categoria: </span>
                    <select name='category' value={state.category} onChange={this.handleChange}>
                        <option value='' selected>Selecionar</option>
                        {
                            props.categories.map(category => (
                                <option value={category.name}>{category.name}</option>
                            ))
                        }
                    </select>
                </label>

                <button type='submit' >Criar Curso</button>

            </form>
        );
    };
}