const express = require('express');

const mongoose = require('mongoose');

const {MONGO_URI} = require('./config/config');

const salesRoutes = require('./routes/api/sales_controller');

const app = express();
app.use(express.json());

mongoose.connect(MONGO_URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => console.log("Connected with mongodb"))
.catch(() => console.log("Failed to connect with mongodb"))

app.get('/', (req, res) => {
    res.send('Hello to the world of nodejs');
});

app.use('/api/sales', salesRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));