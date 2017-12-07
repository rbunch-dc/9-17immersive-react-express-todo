import React, { Component } from 'react';
import NavBar from './NavBar';
import axios from 'axios';

class ToDo extends Component{

	constructor(){
		super();
		this.state = {
			taskList: []
		}
		this.addNewTask = this.addNewTask.bind(this);
	}

	addNewTask(event){
		event.preventDefault();
		const task = document.getElementById('new-task').value;
		const taskDate = document.getElementById('new-task-date').value;
		

	}

	render(){
		var taskArray = this.state.taskList.map((task,i)=>{
			return(
				<tr>
					<td></td>
					<td></td>
					<td></td>
				</tr>
			)
		});
		return(
			<div className="to-do-app">
				<NavBar />		
				<div className="section no-pad-bot" id="index-banner">
					<div className="container">
						<h1 className="header center orange-text">To-Do List</h1>
						<div className="row center">
							<h5 className="header col s12 light">Made with React and Express</h5>
						</div>
					</div>
				</div>	
				<div className="container">
					<form onSubmit={this.addNewTask} className="add-box">
						<input type="text" id="new-task" placeholder="New Task" />
						<input type="date" id="new-task-date" />
						<button type="submit" className="btn btn-primary">Add Task</button>
					</form>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Task</th>
								<th>Delete</th>
								<th>Edit</th>
							</tr>
						</thead>
						<tbody>
							{taskArray}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

export default ToDo;