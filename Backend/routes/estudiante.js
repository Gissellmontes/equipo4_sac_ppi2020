const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql')

router.get('/estudiante', (req, res) => {
  connection.query("SELECT * FROM estudiante", (error, result, fields) => {
    res.json(result)
   })
})

router.get('/estudiante/:id', (req, res) => {
  connection.query("SELECT * FROM estudiante", (error, result, fields) => {
    res.json(result)
   })
})

router.post('/estudiante', (req, res) => {})

router.put('/estudiante/:id', (req, res) => {})

router.delete('/estudiante/:id', (req, res) => {})
module.exports = router