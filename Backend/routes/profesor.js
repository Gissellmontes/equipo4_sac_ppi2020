const {Router} = require('express')
const router = Router()
const {connection} = require('./../db/mysql')

router.get('/profesor', (req, res) => {
  connection.query("SELECT * FROM Profesor", (error, result, fields) => {
    if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json(result)
    }
   })
})

router.get('/profesor/:correo', (req, res) => {
  let correo = req.params.correo
  connection.query("SELECT * FROM profesor WHERE Correo = ?",[Correo] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({})
   })
})

router.post('/profesor', (req, res) => {
  try{
    let {
      Correo,
      Contrasena,
      Nombre
    } = req.body
    const SQL = `INSERT INTO Profesor(Correo,Contrasena,Nombre) VALUES(?,?,?)`
    const data = [Correo, Contrasena, Nombre]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "profesor insertado correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.put('/Profesor/:correo', (req, res) => {
  try{
    let Correo = req.params.correo
    let {
      Contrasena,
      Nombre
    } = req.body
    const SQL = `UPDATE Profesor SET Contrasena = ?,Nombre = ? WHERE Correo = ?`
    const data = [Contrasena, Nombre,Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "Profesor actualizado correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.delete('/Profesor/:correo', (req, res) => {
  try{
    let   Correo = req.params.correo
  
    const SQL = `DELETE FROM Profesor WHERE Correo = ?`
    const data = [Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      console.log(result)
      if(result.affectedRows > 0)
        res.json({mensaje : "Profesor eliminado correctamente."})
      else
        res.json({mensaje : "Profesor no existe con este correo o ya fue eliminado."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})
module.exports = router