var express = require('express');
var router = express.Router();

var motleyCrue = [
	'Tommy Lee',
	'Mick Marks',
	'Vince Neil',
	'Nikki Sixx',
	'Tommy Lee',
	'Mick Marks',
	'Vince Neil',	
	'Tommy Lee',
	'Mick Marks',
	'Vince Neil',
	'Tommy Lee',
	'Mick Marks',
	'Vince Neil',
	'Tommy Lee',
	'Mick Marks',
	'Vince Neil',
	'Tommy Lee',
	'Mick Marks',
	'Vince Neil',
];

console.log(motleyCrue);

/* GET home page. */
router.get('/', function(req, res, next) {
	if(motleyCrue.length > 5){
		var long = true;
	}else{
		var long = false;
	}
  res.render('index', {
  	bigBand: long,
  	theBand: motleyCrue
  });
});

router.get('/remove/:member',(req, res)=>{
	var memberToRemove = req.params.member;
	var indexToSplice = motleyCrue.indexOf(decodeURI(memberToRemove))
	if(indexToSplice > -1){
		motleyCrue.splice(indexToSplice,1);
	}
	res.redirect('/');
	// res.send(memberToRemove);
});

router.post('/search',(req, res)=>{
	var userName = req.body.userName;
	if(motleyCrue.indexOf(userName) > -1){
		res.send("Rock on, Crue!");
	}else{
		res.send("What kind of music do you like?");
	}
	
});

router.get('/search',(req,res)=>{
	res.send(req.query.userName);
});

router.post('/addNew',(req, res)=>{
	var newMember = req.body.newMember;
	motleyCrue.push(newMember);
	// res.render('index',{theBand: motleyCrue})
	res.redirect('/')
});

module.exports = router;
