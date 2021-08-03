import React, { Component } from 'react';
import './App.css'
import Course from './Componentes/Course'
import NewCourseForm from './Componentes/NewCourseForm';
import { CourseService } from './Componentes/services/CourseService'
import { CategoryService } from './Componentes/services/CategoryService';

// import MyForm from './Componentes/MyForm';
// import MyForm2 from './Componentes/MyForm2';
// import TextCounter from './Componentes/TextCounter'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      categories: [],
    }
    this.startData = this.startData.bind(this)
    this.add = this.add.bind(this)
    this.remove = this.remove.bind(this);

    this.startData();
  }

  async startData() {

    const [courses, categories] = await Promise.all([
      CourseService.list(),
      CategoryService.list(),

    ])

    this.setState({
      courses,
      categories,
    })
  }

  async add(course) {
    const courses = this.state.courses
    // const newCourse = Object.assign({}, course, { id: (Date.now()) })
    // courses.push(newCourse)
    const newCourse = await CourseService.create(course);
    courses.push(newCourse)
    this.setState({ courses })
  }

  async remove(courseId) {
    const { courses } = this.state;
    const courseIndex = courses.findIndex(course => course.id === courseId);
    await CourseService.remove(courseId);
    courses.splice(courseIndex, 1);
    this.setState({ courses: courses })
    // let nova = courses.filter(item => item.id != courseId) // alterando item selecionado com filter
    // this.setState({ courses: nova })

  }


  render() {

    const { state } = this

    return (
      <div>

        <NewCourseForm onSubmit={this.add} categories={this.state.categories} />

        <ul className='courses-list'>
          {
            state.courses.map((course) => {
              return (
                <Course course={course} onRemove={this.remove} />
              )

            })
          }
        </ul>



        {/* <TextCounter limit={20} />
        <MyForm /> 
        <MyForm2 /> */}


      </div>
    );
  }
}


export default App;
