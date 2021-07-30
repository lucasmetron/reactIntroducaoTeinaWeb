import React, { Component } from 'react'

export default class Course extends Component {
    static defaultProps = {
        course: {},
        onRemove: () => { },
    }

    constructor(props) {
        super(props)
        this.remove = this.remove.bind(this)

    }

    remove() {
        this.props.onRemove(this.props.course.id)
    }


    render() {
        const { props } = this,
            { course } = props


        return (
            <li className='course'>
                <div>{course.category}</div>
                <button onClick={this.remove}>X</button>
                <img src={course.image} alt={course.name} />
                <div>{course.name}</div>
            </li>
        );
    }
}