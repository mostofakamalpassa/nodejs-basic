const express = require('express');
const http = require('http');

const bodyParser =require('body-parser');


const app = express();

app.use(bodyParser.urlencoded({extended:false}))

app.use((req, res, next)=>{
    console.log("hello Middleware 1");
    next();
});

app.use((req, res, next)=>{
    console.log("middleware 2 pss");
   next();
})


app.use("/users",(req, res, next)=>{
    res.send("<h2> Hello bangladesh</h2>")
})

app.use('/add-product', (req, res, next)=>{
    res.send(`<form action="/add-product" method="Post">
        <input type="text" name="product"/>
        <button>Add product</button>
    </form>`)
})

app.use('/product', (req, res, next)=>{
    console.log(res.body);
    res.redirect('/');
})



app.use('/',(req, res, next)=>{
   // console.log(req);
   res.send( "<h3>Hello My name Middleware  id i am bring every thins</h3>")
   // next();
});
// const server = http.createServer(app);




// server.listen(5000);
app.listen(5000);