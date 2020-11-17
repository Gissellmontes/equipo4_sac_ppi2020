mysql = require('mysql');
const util = require('util')
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'bfb0uqoprf7gt47xneak-mysql.services.clever-cloud.com',
  user     : 'ux6soryfrgj4sob3',
  password : '7ZbXR8cC9mzQbhWNn2rd',
  database : 'bfb0uqoprf7gt47xneak'
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}