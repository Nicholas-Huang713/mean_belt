const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8000;
const app = express();
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public/dist/public'));

mongoose.connect('mongodb://localhost/pet_shelter');
require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(PORT,()=>{`Listening on port ${PORT}`});