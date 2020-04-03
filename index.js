const express = require('express');

const app = express();
const routes = require('./routes/app');
app.use('/', routes);
// const port = process.env.PORT '' 3000; 
const port = process.env.PORT || 8000;

const server = app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});