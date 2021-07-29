import React, { Component } from 'react';
import './App.css'
import Course from './Componentes/Course'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: 'React',
          category: 'JavaScript',
          image: 'https://natahouse.com/static/a7226e980cdd03e0ea4400310225cf55/e2ca6/react_js.jpg'
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

  }


  render() {

    const { state } = this


    return (
      <div>

        <ul className='courses-list'>
          {
            state.courses.map((course, i) => {
              return (
                <Course course={course} onRemove={this.remove} />
              )

            })
          }
        </ul>

      </div>
    );
  }
}


export default App;
