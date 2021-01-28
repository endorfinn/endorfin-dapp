const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require('./batch');

app.get('/', (req, res) => {
    res.json({
        success: true,
    });
});

app.listen(port, () => {
    console.log(`server is listening at localhost:${port}`);
});
