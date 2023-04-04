const express = require('express');
const router = express.Router();
const pool = require('../dbcon')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sql = 
    `SELECT * FROM document`
        pool.execute(sql, (error, result) => {
            if (error) {
                res.status(500).send('something went wrong')
                return 
            } else {
                res.status(200).json(result)
            }
        })
});

module.exports = router;