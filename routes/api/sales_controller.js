const express = require('express');
const SalesSchema = require('../../models/Sales');
const {monthlyStats, priceStatsForBarChart , categoryStatsForPieChart} = require('./sales_service');

const router = express.Router();

const monthValidator = (res, month) => {
    if (month < 1 || month > 12) {
        res.status(400).send("Invalid month entered");
    }
}

router.post('/import-data-to-db', (req, res) => {
    try {
        fetch("https://s3.amazonaws.com/roxiler.com/product_transaction.json")
            .then((response) => response.json())
            .then(async (data) => {
                await SalesSchema.insertMany(data);
                res.status(200).send("SUCCESS")
            });
    } catch (e) {
        res.status(400).json({ msg: e });
    }
})

router.get('/monthly-stats', async(req, res) => {
    monthValidator(res, req.query.month);
    const response = await monthlyStats(req.query.month);
    res.status(200).send(response)
})

router.get(('/price-stats/bar-chart'), async(req, res) => {
    monthValidator(res, req.query.month);
    const response = await priceStatsForBarChart(req.query.month);
    res.send(response);
});

router.get("/category-stats/pie-chart", async(req, res) => {
    monthValidator(res, req.query.month);
    const response = await categoryStatsForPieChart(req.query.month);
    res.send(response);
})

router.get("/get-all-stats", async(req, res) => {
    monthValidator(res, req.query.month);
    const monthStats = await monthlyStats(req.query.month);
    const priceStats = await priceStatsForBarChart(req.query.month);
    const categoryStats = await categoryStatsForPieChart(req.query.month);
    res.send({
        'monthlyStats' : monthStats,
        'priceStatsForBarChart' : priceStats,
        'categoryStatsForPieChart' : categoryStats,
    })
})

module.exports = router;