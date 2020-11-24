mysql = require('mysql');
const util = require('util')
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : "bpk2zoxdckgyuwwwwtyw-mysql.services.clever-cloud.com",
  user     : 'ud9hka7ifqbug1p6',
  password : 'YrJZf3T0ioiHgVJOlHzO',
  database : 'bpk2zoxdckgyuwwwwtyw'
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}