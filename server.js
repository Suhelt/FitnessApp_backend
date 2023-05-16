const express =  require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require("body-parser");
const symptomrouter = require("./routes/symptoms.routes");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(symptomrouter);

app.listen(PORT, ()=>{
    console.log("server working")
})