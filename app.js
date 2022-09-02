const express = require('express');
const http = require('http');
const adminRoute = require("./routes/admins")
const shopRoute = require("./routes/shope");
const bodyParser =require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoute);
app.use('/shop',shopRoute);

app.use((req, res, next)=>{
    // console.log(req);
    res.status(404).sendFile(path.join(__dirname, './','views','404.html'));
    // next();
 });




// const server = http.createServer(app);
// server.listen(5000);
app.listen(5000);