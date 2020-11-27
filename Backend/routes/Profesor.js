const { Router } = require("express")
const router = Router()
const {connection} = require('../db/mysql')

    
router.get("/Profesor", (req, res) => {
    connection.query('SELECT * FROM docente',  (error, rows, fields) => {
        if(!error){
          res.json(rows)
        }else{
            res.json({error: "Error ejecutando la consulta"})
        }
    })
})

router.get('/Profesor/:id', (req, res) => {
  try{
    const id = req.params.id
    connection.query(`SELECT * 
                      FROM Profesor
                      WHERE Nombre_del_Profesor = ?`, [id],  (error, rows, fields) => {
        if(error){
          res.json({error: "Error ejecutando la consulta"})
          
        }else{
          if(rows[0])
            res.json(rows[0])
          else
            res.json({})
        }
    })
  }catch(error){
    res.status(503).json({mensaje : "Error en el servidor.", error : true})
  }
})

router.get("/Profesor/filtro", (req, res) => {
  try{
    const nombre = req.query.nombre
 
    connection.query(SQL,[`%${nombre}%`,`%${nombre}%`], (errors, results, fields) => {
      if(errors){
        res.status(500).json({mensje : "error en la consulta"})
      }else{
        res.status(200).json(results)
      }
    })
  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }finally{
    
  }
})

router.post('/Profesor', async(req,res) => {
  try{
    const {
          Nombre_del_Profesor,
          Correo_electronico,
          Contrasena_del_docente

    } = req.body
    const SQL = `INSERT INTO Profesor(Nombre_del_Profesor, Correo_electrónico,Contraseña_del_Profesor) VALUES(?, ?, ?)` 
    const DATA = [Nombre_del_Profesor, Correo_electronico, Contrasena_del_Profesor]

    const response = await connection.query(SQL, DATA)

})


    connection.query(`UPDATE Profesor
                      SET Nombre_del_Profesor = ?,  Correo_electrónico = ?, Contraseña_del_Profesor = ?
                      WHERE Identificación_del_docente = ?`,[Nombre_del_Profesor, Correo_electronico, Contrasena_del_Profesor,], (error, resulset, fields) => {
                        if(error){
                          console.log(error)
                          res.status(502).json({mensaje: "Error en motor de base de datos."})
                        }else{
                          res.status(201).json({mensaje : 'El Profesor se actualizo exitosamente.'})
                        }
                      } 
                    )

 //   console.log(id)
  }catch(error){
    res.status(502).json({mensaje : "Error en el servidor."})
  }
})


  
module.exports = router