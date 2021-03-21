// grab express and pg-pool

const express = require('express');
const router = express.Router();
const pool = require('../pool');

// routes

// GET 
router.get('/', (req, res)=>{
    let queryText = `
    SELECT * FROM "checklist"
    ORDER BY id;
    `;
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
router.put('/:id', (req, res)=>{
    let queryText = `UPDATE "checklist" SET "complete"=true WHERE "id"=$1`;
    if (req.body.complete === 'true') {
        queryText = `UPDATE "checklist" SET "complete"=false WHERE "id"=$1`;
    }
    pool.query(queryText, [req.params.id]).then((results)=>{
        console.log(results);
        res.sendStatus(200);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

// DELETE

// export routes
module.exports = router;