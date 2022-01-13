//Require express library that was downloaded (import)
const express = require("express")

//set up the router connecting it to the app
const router = express.Router()

router.get('/', (req, res) => {
	res.send("User List")
})

// router.get('/new', (req, res) => {
// 	//will request new users
// 	res.send("User New Form")
// })

//get for the users/new.ejs form
router.get('/new', (req, res) => {
	//will request new users
	res.render("users/new")
})

//Post new user (routed to /users)
// router.post('/', (req, res) => {
// 	res.send("Create User")
// })

//Post new user (for the users/new.ejs form)
router.post('/', (req, res) => {
	console.log(req.body.firstName)
	res.send(`Hello ${req.body.firstName}`)
})



//Just a new page
router.get('/old', (req, res) => {
	//will request old users
	res.send("Old User Form")
})

//for getting individual user
router.get('/:id', (req, res) => {
	console.log(req.user)
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

//Middleware for locating user by ID
const users = [{ name: "Kyle" }, { name: "Sally"}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})


module.exports = router