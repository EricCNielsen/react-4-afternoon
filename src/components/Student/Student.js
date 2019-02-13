import React, { Component } from 'react';
import axios from 'axios'


export default class Student extends Component {
  constructor(props) {
    super(props)

    this.state={
      studentInfo: {}
    }
    this.goBack = this.goBack.bind(this)

  }
  goBack() {
    this.props.history.goBack()
  }

  componentDidMount() {
    console.log(this.props)
   axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then(res => {
      this.setState({
        studentInfo: res.data
      })
    })
  }

  render() {
    return (
      <div className="box">
        <button onClick={this.goBack}>Back</button>
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    )
  }
}