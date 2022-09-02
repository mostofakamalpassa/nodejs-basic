const express = require('express');
const http = require('http');




const app = express();

app.use((req, res, next)=>{
    console.log(req);
    next();
});

app.use((req, res, next)=>{
    res.send("<h2> Hello bangladesh</h2>")
})

const server = http.createServer(app);


server.listen(5000);