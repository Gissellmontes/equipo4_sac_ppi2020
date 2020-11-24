const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql')

router.get('/estudiante', (req, res) => {
  connection.query("SELECT * FROM Estudiante", (error, result, fields) => {
    if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json(result)
    }
   })
})

router.get('/estudiante/:correo', (req, res) => {
  let correo = req.params.correo
  connection.query("SELECT * FROM Estudiante WHERE Correo = ?",[correo] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({})
   })
})

router.post('/estudiante', (req, res) => {
  try{

  }catch(error){
    
  }
})

router.put('/estudiante/:id', (req, res) => {})

router.delete('/estudiante/:id', (req, res) => {})
module.exports = router