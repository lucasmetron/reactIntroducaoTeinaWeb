import React, { Component } from 'react';
import './App.css'
import Course from './Componentes/Course'
import NewCourseForm from './Componentes/NewCourseForm';
// import MyForm from './Componentes/MyForm';
import MyForm2 from './Componentes/MyForm2';
// import TextCounter from './Componentes/TextCounter'

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
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this);
  }

  add(course) {
    const courses = this.state.courses
    // const newCourse = Object.assign({}, course, { id: (Date.now()) })
    // courses.push(newCourse)
    course.id = Date.now();
    courses.push(course)
    this.setState({ courses })
    console.log(courses)
  }

  remove(courseId) {
    const { courses } = this.state;
    const courseIndex = courses.findIndex(course => course.id === courseId);
    courses.splice(courseIndex, 1);
    this.setState({ courses: courses })
    // let nova = courses.filter(item => item.id != courseId) // alterando item selecionado com filter
    // this.setState({ courses: nova })

  }


  render() {

    const { state } = this

    return (
      <div>

        {/* <NewCourseForm onSubmit={this.add} />

        <ul className='courses-list'>
          {
            state.courses.map((course) => {
              return (
                <Course course={course} onRemove={this.remove} />
              )

            })
          }
        </ul> */}



        {/* <TextCounter limit={20} />
        <MyForm /> */}
        <MyForm2 />


      </div>
    );
  }
}


export default App;
