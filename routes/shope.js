const minDir = require('../utility/helper');
const express = require('express');
const path = require('path');


const router = express.Router();


router.get('/', (req, res, next)=>{
    
    // res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'))
    res.sendFile(path.join(minDir, 'views', 'shop.html'))
})



module.exports = router;