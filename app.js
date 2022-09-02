const express = require('express');
const http = require('http');

const bodyParser =require('body-parser');


const app = express();
const adminRoute = require("./routes/admins")
app.use(bodyParser.urlencoded({extended:false}))

app.use(adminRoute);


app.use('/',(req, res, next)=>{
    // console.log(req);
    res.send( "<h3>Hello My name Middleware  id i am bring every thins</h3>")
    // next();
 });




// const server = http.createServer(app);
// server.listen(5000);
app.listen(5000);