const SalesSchema = require('../../models/Sales');
const rangeFinder = require('../../utils/rangeFinder');

const getDataMonthWise = async (month) => SalesSchema
.find({ "$expr": { "$eq": [{ "$month": "$dateOfSale" }, month] } })
.then((data) => data)

const monthlyStats = async (month) => {
    const monthData = await getDataMonthWise(month);
    const response = {
        saleAmount: 0,
        soldItems: 0,
        notSoldItems: 0,
    };
    monthData.map((item, index) => {
        response.saleAmount = response.saleAmount + parseFloat(item.price);
        if (item.sold) {
            response.soldItems = response.soldItems + 1;
        } else {
            response.notSoldItems = response.notSoldItems + 1;
        }
    })
   return response;
}

const priceStatsForBarChart = async(month) => {
    const monthData = await getDataMonthWise(month);
    const range = {};
    monthData.map((item) => {
        const price = parseFloat(item.price);
        const rangeValue = rangeFinder(price);
        if (range[rangeValue] != null) {
            range[rangeValue] = range[rangeValue] + price
        } else {
            range[rangeValue] = price;
        }
    })
    return range;
}

const categoryStatsForPieChart = async(month) => {
    const monthData = await getDataMonthWise(month);
    const categoryRange = {};
    monthData.map((item) => {
        if (categoryRange[item.category] != null) {
            categoryRange[item.category] = categoryRange[item.category] + 1
        } else {
            categoryRange[item.category] = 1;
        }
    })
    return categoryRange;
}

module.exports = {
    monthlyStats : monthlyStats,
    priceStatsForBarChart: priceStatsForBarChart,
    categoryStatsForPieChart: categoryStatsForPieChart,
};