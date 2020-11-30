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
  let Correo = req.params.correo
  connection.query("SELECT * FROM Estudiante WHERE Correo = ?",[Correo] ,(error, result, fields) => {
    if(result[0])
      res.json(result[0])
    else
      res.json({})
   })
})

router.post('/estudiante', (req, res) => {
  try{
    let {
      Correo,
      Contrasena,
      Codgrupo
    } = req.body
    const SQL = `INSERT INTO Estudiante(Correo,Contrasena,Cod_grupo) VALUES(?,?,?)`
    const data = [Correo, Contrasena, Codgrupo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "estudiante insertado correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.put('/estudiante/:correo', (req, res) => {
  try{
    let Correo = req.params.correo
    let {
      Contrasena,
      Codgrupo
    } = req.body
    const SQL = `UPDATE Estudiante SET Contrasena = ?,Cod_grupo = ? WHERE Correo = ?`
    const data = [Contrasena, Codgrupo,Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      res.json({mensaje : "estudiante actualizado correctamente."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})

router.delete('/estudiante/:correo', (req, res) => {
  try{
    let Correo = req.params.correo
  
    const SQL = `DELETE FROM Estudiante WHERE Correo = ?`
    const data = [Correo]
    connection.query(SQL, data,(error, result, fields) => {
      if(error){
      console.log(error)
      res.status(500).json({mensaje : "Error durante la consulta"})
    }else{
      console.log(result)
      if(result.affectedRows > 0)
        res.json({mensaje : "estudiante eliminado correctamente."})
      else
        res.json({mensaje : "El estudiante no existe con este correo o ya fue eliminado."})
    }
    })
  }catch(error){
    console.log(error)
      res.status(500).json("Error")
  }
})
module.exports = router