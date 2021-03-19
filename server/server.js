
// require express
const express = require('express');
const app = express();

// body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

// static server
app.use( express.static('server/public') );

// port
const port = 5000;

// modules
const example = require('./modules/pool');

// app listen
app.listen(port, ()=>{
    console.log('server is up on:', port);
})


