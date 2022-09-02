const express = require('express');
const router = express.Router();
// /admin/add-product  => GET
router.get("/add-product", (req, res, next)=>{
    res.send(
        `
            <form action='/admin/product' method='post'>
                <input type="text" name="title"/>
                <input type="text" name='author'/>
                <button>Save book</button>
            </form>
        `
    )
})
// /admin/product => POST
router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shope/');
})



module.exports = router;