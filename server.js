//Basic Output
// console.log("Hello World");

//Require express library that was downloaded
const express = require("express")

//set up the server with app variable calling express as a function
const app = express()

//Tell app to use view engine
app.set('view engine', 'ejs')

//use the logout middleware
app.use(logger)

//set up routes ("/" - root path)
app.get("/", (req, res) => {

    //sends a status
    //res.sendStatus(200).send("OK")

    //downloads the server.js file
    //res.download("server.js")

    //to pass a string to console
    console.log("Hello World")

    //just pass a string
    //res.send("Hello World")

    //pass a json
    //res.json({ message: "Hello World"})

    //renders the index.html file
    res.render('index', {text: "...And this is more Text"})
    //{text:} adds to the page
})

//import users router
const userRouter = require('./routes/users')

//Link Routes
app.use('/users', userRouter)

//Middleware for logging
function logger(req, res, next) {
	console.log(req.originalUrl)
	next()
}

//make servern run pass through port #
app.listen(3000)