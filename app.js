// Require packages and set the port
const express = require('express');
const port = process.env.PORT || 3000;
// const port = 3002;
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')
const routes = require('./routes/routes');
 
// Use Node.js body parsing middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
 
routes(app);
 
// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
 
    console.log(`Server listening on port ${server.address().port}`);
});