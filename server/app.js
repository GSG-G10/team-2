const express = require('express')
const app = express()





app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);


module.exports = app
