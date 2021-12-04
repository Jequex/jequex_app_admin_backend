const util = require('util');
const db = require('../database/index');

const query = util.promisify(db.query).bind(db);


exports.test = async (req, res) => {
    await query('');
    res.send('hello')
}