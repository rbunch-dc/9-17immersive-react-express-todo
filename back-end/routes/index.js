var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require('../config/config');
var connection = mysql.createConnection(config)
connection.connect();

router.post('/addTask',(req, res)=>{
	const taskName = req.body.taskName;
	const taskDate = req.body.taskDate;
	var thePromise = new Promise((resolve, reject)=>{
		const insertQuery = `INSERT INTO tasks (taskName,taskDate)
			VALUES (?,?);`
		connection.query(insertQuery,[taskName,taskDate],(error)=>{
			if(error){
				reject(error);
			}else{
				resolve({msg:"success"});
			}
		})
	})
	thePromise.then((promiseResponse)=>{
		const selectQuery = `SELECT * FROM tasks`;
		connection.query(selectQuery,(error,results)=>{
			if(error){
				throw error;
			}else{
				res.json(results);
			}
		})
	})
});

/* GET home page. */
router.get('/getStudents', function(req, res, next) {
	const selectQuery = `SELECT * FROM students`;
	connection.query(selectQuery,(error, results)=>{
		if (error){
			throw error;
		}else{
			res.json(results);		
		}
	})	
});

router.post('/addStudent',(req, res)=>{
	// This data is posted from axios in React (App.js)
	const studentName = req.body.studentName;
	var insertQuery = `INSERT INTO students 
		(name)
		VALUES
		(?);`
	var promiseOne = new Promise((resolve, reject)=>{
		connection.query(insertQuery,[studentName],(error)=>{
			if (error){
				reject(error);
			}else{
				resolve({msg:"Success"});
			}
		})
	});
	// .then will run on our promise when it's finished.
	// We can make them both on the same indent this way!
	promiseOne.then((data)=>{
		var promiseTwo = new Promise((resolve, reject)=>{
			const query = `SELECT * FROM students;`;
			connection.query(query,(error, results)=>{
				if(error){
					reject(error);
				}else{
					resolve(results)
				}
			})
		});
		promiseTwo.then((studentsList)=>{
			res.json(studentsList)
		})
	})

	// res.json(req.body);
})


module.exports = router;
