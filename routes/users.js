//Require express library that was downloaded (import)
const express = require("express")

//set up the router connecting it to the app
const router = express.Router()

router.get('/', (req, res) => {
	//will use post request but for now
	res.send("User List")
})

router.get('/new', (req, res) => {
	//will request new users
	res.send("User New Form")
})

//Just a new page
router.get('/old', (req, res) => {
	//will request old users
	res.send("Old User Form")
})

//for getting individual user
router.get('/:id', (req, res) => {
    req.params.id
	res.send(`User Get with ID ${req.params.id}`)
})

module.exports = router