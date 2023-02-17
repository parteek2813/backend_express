const express = require("express");
const cookieParser = require("cookie-parser");

const path = require("path");
const app = express();


// These are the Routing path for the different routes.!
const logInRoute = require("./routes/login.js");
const addRoute = require("./routes/add.js");



//importing the cookie jwt auth package
const { cookieJwtAuth} = require("./Middleware/CookieJwtAuth");

const PORT = 3000;

//setting up the url body part from the express code!
app.use(
    express.urlencoded({extended: true})
);

//using the cookie parser
app.use(cookieParser());


// index get request.!
app.get("/" , (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

//welcome get request.!
app.get("/welcome" , (req, res)=>{
    res.sendFile(path.join(__dirname, "../public/welcome.html"));
})


// app.get("/login" , (req, res)=>{
//     res.sendFile(path.join(__dirname, "../public/welcome.html"));
//     console.log("Got the response from the web server")

// })


app.post("/login", logInRoute);
app.post("/add", cookieJwtAuth, addRoute);


app.listen(PORT, ()=>{
    console.log(`Example app listening on the port http://localhost:${PORT}`);
})


