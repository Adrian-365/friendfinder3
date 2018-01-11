//require path, body-parser, and express 
var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
// Tells node that we are creating an "express" server
var app = express();

//set up the port, deployable to heroku etc.
var PORT = process.env.PORT || 3000;
// set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//initialize routes
// app.use(routes);

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});