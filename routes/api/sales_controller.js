const express = require('express');
const SalesSchema = require('../../models/Sales');

const router = express.Router();

router.post('/import-data-to-db', (req, res) => {
    try{
        fetch("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
            .then((response) => response.json())
            .then(async (data) => {
                await SalesSchema.insertMany(data);
                res.status(200).send("SUCCESS")
            });
    }catch(e){
        res.status(400).json({msg : e});
    }
})

module.exports = router;