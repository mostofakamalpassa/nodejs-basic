const express = require('express');
const http = require('http');
const adminRoute = require("./routes/admins")
const shopRoute = require("./routes/shope");
const bodyParser =require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoute);
app.use('/shope',shopRoute);

app.use((req, res, next)=>{
    // console.log(req);
    res.status(404).send( "<h3>Page not found</h3>")
    // next();
 });




// const server = http.createServer(app);
// server.listen(5000);
app.listen(5000);