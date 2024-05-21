const Pool = require('pg').Pool

const pool = new Pool({
    user:"postgres",
    password:"1234qwerasdf",
    database:"web_test",
    port:5432,
    host:"localhost"
});

module.exports = pool;
