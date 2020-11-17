mysql = require('mysql');
const util = require('util')
var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : "brwugsuxv6kjhags9gjf-mysql.services.clever-cloud.com",
  user     : 'ult3aumzkhy5u6ag',
  password : 'Nq0Gf1d0JzVNFI5Fko0v',
  database : 'brwugsuxv6kjhags9gjf'
});

pool.on('release', function (connection) {
  console.log('Connection %d released', connection.threadId);
});

pool.query = util.promisify(pool.query)

module.exports =  {connection: pool}