const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '',
  user     : '',
  password : '',
  database : ''
});

connection.connect((error) => {
    if(error){
      console.log(`Error en conexión a base de datos: ${error}`)
      return;
    }else{
      console.log("Conexión extablecida con el servidor de MySQL")
    }
});

module.exports =  {connection: connection}