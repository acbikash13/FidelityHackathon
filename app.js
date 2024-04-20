// Description: This file is the entry point of the application.
require('dotenv').config();
const port= process.env.PORT ;

const sendTheCourseToTheUser = require('./Route/sendTheCourseFromTheOpenAI');

const express=require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(express.json())
const path = require('path');
// Enable all CORS requests
app.use(cors());

// serves the static files
app.use(express.static('public'));
// send the user to this route
app.use('/api', sendTheCourseToTheUser);
// Configure bodyParser middleware and set the ejs engine
app.use(bodyParser.urlencoded({ extended: true }));
// app.set("view engine", "ejs")


const ipAddress = '10.15.212.88'
app.listen(port, ipAddress,() => {
    console.log(`Server is running on port http://${ipAddress}:${port}`);
});

