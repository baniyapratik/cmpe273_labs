const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = new express();

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes/routes')(app);
const PORT = process.env.PORT || 5000;
app.listen(PORT);
