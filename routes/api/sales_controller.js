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

router.get('/monthly-stats', (req, res) => {
    if(req.query.month >= 1 && req.query.month <=12){
        SalesSchema.find({ "$expr": { "$eq": [{ "$month": "$dateOfSale" }, req.query.month] } }).then((data) => {
            const response = {
                saleAmount : 0,
                soldItems : 0,
                notSoldItems: 0,
            };
            data.map((item, index) => {
                response.saleAmount = response.saleAmount + parseFloat(item.price);
                if(item.sold){
                    response.soldItems = response.soldItems + 1; 
                }else{
                    response.notSoldItems = response.notSoldItems + 1;
                }
            })
            res.status(200).send(response)
        });
        
    }else{
        res.status(400).send("Invalid month entered");
    }
})

module.exports = router;