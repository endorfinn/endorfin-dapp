const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;
require('./batch/batch');
dotenv.config();

const coinOracleRoutes = require('./routes/coinOracle');

app.use(bodyParser.json());
app.use('/api/v1/coinoracle', coinOracleRoutes);

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || '서버에서 에러가 발생했습니다' });
});

mongoose
    .connect(process.env.MONGO_DB, { useNewUrlParser: true })
    .then(() => {
        app.listen(5000);
        console.log(`server is listening at localhost:${port}`);
    })
    .catch((err) => {
        console.error(err);
    });
