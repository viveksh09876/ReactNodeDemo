const express = require('express');
const cors = require('cors');
const routes = require('./routes/index');
const newsRoute = require('./routes/news');

let app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.options('*', cors());

app.use('/', routes);
app.use('/news', newsRoute);

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});