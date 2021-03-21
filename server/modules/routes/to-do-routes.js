// grab express and pg-pool

const express = require('express');
const router = express.Router();
const pool = require('../pool');

// routes

// GET 
router.get('/', (req, res)=>{
    let queryText = `SELECT * FROM "checklist"`;
    pool.query(queryText).then((results)=>{
        res.send(results.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})// end GET


// POST
router.post('/', (req, res)=>{
    let queryText = `INSERT INTO "checklist" (task, complete) VALUES ($1, $2);`
    pool.query(queryText, [req.body.task, req.body.complete]).then((results)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})// end POST

// PUT

// DELETE

// export routes
module.exports = router;