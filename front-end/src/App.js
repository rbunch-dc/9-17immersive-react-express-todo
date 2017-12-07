import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      students: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount(){
    axios.get('http://localhost:3000/getStudents')
      .then((response)=>{
        console.log(response)
        this.setState({
          students: response.data
        })
      });
  }

  handleSubmit(event){
    event.preventDefault();
    const studentName = document.getElementById('new-student').value;
    // console.log(event.target);
    // We want to send studentName to the server.
    // We CANNOT use get. We need to use post.
    // There is an axios.post and there is axios({}).
    // Axios always returns a proimse, so we will send data 
    // to the express server, and wait for a JSON response.
    // When we get it, we will move forward
    axios({
      method: "POST",
      url: "http://localhost:3000/addStudent",
      data: {
        studentName: studentName
      }
    }).then((studentData)=>{
      console.log(studentData);
      this.setState({
        students: studentData.data
      })
    })
  }

  render() {
    var studentsArray = this.state.students.map((student,i)=>{
      return (<li key={i}>{student.name}</li>)
    })
    console.log(studentsArray);
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="new-student" placeholder="New Student name" />
          <button type="submit">Add Student</button>
        </form>
        <ul>
          {studentsArray}
        </ul>
      </div>
    );
  }
}

export default App;
