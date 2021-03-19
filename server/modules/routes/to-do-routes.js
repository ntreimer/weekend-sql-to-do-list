// grab express and pg-pool

const express = require('express');
const router = express.Router();
const pool = require('../pool');

// routes

// GET 
router.get('/', (req, res)=>{
    console.log('in /toDo GET:', res);
    res.send('tweet');
})
// end GET

// POST

// PUT

// DELETE

// export routes
module.exports = router;