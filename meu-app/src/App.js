import React, { Component } from 'react';
import './App.css'
import Course from './Componentes/Course'
import MyForm from './Componentes/MyForm';
import TextCounter from './Componentes/TextCounter'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: 'React',
          category: 'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
        },
        {
          id: 2,
          name: 'Angular',
          category: 'JavaScript',
          image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png'
        }
      ],
    }

    this.remove = this.remove.bind(this);
  }

  remove(courseId) {
    const { courses } = this.state;
    const courseIndex = courses.findIndex(course => course.id == courseId);
    courses.splice(courseIndex, 1);
    this.setState({ courses: courses })
    // let nova = courses.filter(item => item.id != courseId) // alterando item selecionado com filter
    // this.setState({ courses: nova })

  }


  render() {

    const { state } = this

    return (
      <div>

        <TextCounter limit={20} />
        <MyForm />

        {/* <ul className='courses-list'>
          {
            state.courses.map((course) => {
              return (
                <Course course={course} onRemove={this.remove} />
              )

            })
          }
        </ul> */}

      </div>
    );
  }
}


export default App;
