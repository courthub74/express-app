//Require express library that was downloaded (import)
const express = require("express")

//set up the router connecting it to the app
const router = express.Router()

router.get('/', (req, res) => {
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

//Post new user
router.post('/', (req, res) => {
	res.send("Create User")
})

//for getting individual user
router.get('/:id', (req, res) => {
    req.params.id
	res.send(`Get User with ID ${req.params.id}`)
})

//for updating individual user
router.put('/:id', (req, res) => {
    req.params.id
	res.send(`Update User with ID ${req.params.id}`)
})

//for deleting individual user
router.delete('/:id', (req, res) => {
    req.params.id
	res.send(`Delete User with ID ${req.params.id}`)
})




module.exports = router