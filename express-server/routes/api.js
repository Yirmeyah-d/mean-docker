// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const redis = require('redis');
var uuid = require('node-uuid');

const router = express.Router();

// MONGODB
// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://mongodb/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const userSchema = new mongoose.Schema({
	id: Number,
  name: String,
  age: Number
});

// create mongoose model
const User = mongoose.model('User', userSchema);

/* GET api listing. */
router.get('/', (req, res) => {
		res.send('api works');
});

/* GET all users. */
router.get('/users', (req, res) => {
	User.find({}, (err, users) => {
		if (err) res.status(500).send(error)

		res.status(200).json(users);
	});
});

/* GET one users. */
router.get('/users/:id', (req, res) => {
	User.find({ id: req.params.id}, (err, users) => {
		if (err) res.status(500).send(error)

		res.status(200).json(users);
	});
});


/* Create a user. */
router.post('/users', (req, res) => {
	let user = new User({
		id: req.body.id,
		name: req.body.name,
		age: req.body.age
	});

	user.save(error => {
		if (error) res.status(500).send(error);

		res.status(201).json({
			message: 'User created successfully'
		});
	});
});


//Redis

const client = redis.createClient({ host: 'redis', port: 6379 })
	.on('connect', function() {
		console.log('Connected to Redis Database!');
	});


router.post('/books', function(req, res, next) {
	let id = 'bookId:' + uuid.v4();
	try {
		client.rpush(['title', req.body.title], function(err, reply) {
			if (err) throw err
			console.log(reply);
		});
		res.status(200).send({"result" :"Données enregistrés"})
	} catch (error) {
		res.status(500).send("Error: " + error)
	}

});

router.get('/books', (req, res) => {
	try {
		client.lrange('title', 0, -1, function(err, reply) {
			if (err) throw err
			console.log(reply);
			res.status(200).json(reply);
		});
	} catch (error) {
		res.status(500).send("Error: " + error)
	}
});

module.exports = router;
