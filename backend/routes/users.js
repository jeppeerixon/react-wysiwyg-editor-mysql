const express = require('express');
const router = express.Router();
const pool = require('../dbcon')

/* GET users listing. */
router.get('/', function(req, res, next) {
  const sql = 
    `SELECT * FROM user`
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
    const {username, password} = req.body
    const sql =`INSERT INTO user(username, password) VALUE (?,?)`
            pool.execute(sql,[username, password], (error, result) => {
                if (error) {
                    res.status(500).send('username already exist')
                } else {
                    res.status(201).send('new user have been added')
                }
            })
});

router.post('/login', function(req, res, next) {
    const {username, password} = req.body
    const sql = `SELECT password, username FROM user WHERE username='${username}'`

    pool.execute(sql, (error, result) => {
        if (error) {
            console.log(error)
            res.sendStatus(500)
            return;
        } 
        
        if (result.length > 0) {
            const storedPass = result[0].password
            const inputPass = password
            
            
            if (storedPass == inputPass) {
                res.status(200).send('Welcome')                
            } else {
                res.sendStatus(401)
            }            
        } else {
            res.status(404).send('user not found')
        }
    }) 

});

module.exports = router;
