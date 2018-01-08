const express = require('express');
const app = express();
const router = express.Router();
//a GET roune to /survey which should display the survey page.
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//A default, catch-all route that leads to home.html which displays the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});