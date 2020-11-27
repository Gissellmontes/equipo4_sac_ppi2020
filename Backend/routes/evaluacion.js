const {Router} = require('express')
const router = Router()
const path = require ('path');
const multer = require ('multer');
const { v4: uuidv4 } = require ('uuid');
const {connection} = require('./../db/mysql')


router.get('/evaluacion', (req, res) => {
  connection.query("SELECT * FROM evaluacion", (error, result, fields) => {
    if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json(result)
    }
   })
})

router.get('/evaluacion/:fecha', (req, res) => {
  let fecha = req.params.fecha
  connection.query("SELECT * FROM evaluacion WHERE Fecha = ?",[fecha] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({mensaje : "Error durante la consulta"})
   })
})

router.post('/evaluacion', (req, res) => {
  try{
    let {
      Fecha,
      Puntaje,
      Correo
    } = req.body
    const SQL = `INSERT INTO evaluacion(Fecha,Puntaje,Correo) VALUES(?,?,?)`
    const data = [Fecha, Puntaje, Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "evaluacion insertada correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.put('/evaluacion/:fecha', (req, res) => {
  try{
    let fecha = req.params.fecha
    let {
      Puntaje,
      Correo
    } = req.body
    const SQL = `UPDATE evaluacion SET Puntaje = ?,Correo = ? WHERE Fecha = ?`
    const data = [Puntaje, Correo,Fecha]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "evaluacion actualizada correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.delete('/evaluacion/:fecha', (req, res) => {
  try{
    let  fecha = req.params.fecha
  
    const SQL = `DELETE FROM evaluacion WHERE Fecha = ?`
    const data = [fecha]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      console.log(result)
      if(result.affectedRows > 0)
        res.json({mensaje : "evaluacion eliminada correctamente."})
      else
        res.json({mensaje :  "evaluacion no existe con esta fecha o ya fue eliminada."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

module.exports = router