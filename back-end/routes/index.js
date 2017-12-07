var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getStudents', function(req, res, next) {
	const students = [
		"Eddie",
		"Valerie",
		"Michael",
		"Scott",
		"Jennifer",
		"Nikolas",
		"Zach",
		"Casey",
		"Jamie",
		"Amir",
		"Akil",
		"Binh",
		"Jong",
		"Jason",
		"Chris",
		"Saif",
		"Taylor"
	];
	res.json(students);
});

module.exports = router;
