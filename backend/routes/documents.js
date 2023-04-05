const express = require('express');
const router = express.Router();
const pool = require('../dbcon')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sql = `SELECT * FROM document`
        pool.execute(sql, (error, result) => {
            if (error) {
                res.status(500).send('something went wrong')
                return 
            } else {
                res.status(200).json(result)
            }
        })
});

router.post('/add', function(req, res, next) {
    console.log(req.body)
    const {user_id, title, info, body} = req.body
    const sql = `INSERT INTO document(user_id, title, info, body) VALUE ('${user_id}', '${title}', '${info}', '${body}')`
                pool.execute(sql, (error , result) => {
                    if (error) {
                        res.status(500).json({message: 'The todo was too long, please shorten it down'})
                    } else {
                        res.status(201).json({message: 'Todo was created!'})
                    }
            })
  });

module.exports = router;