
const Db = require('./dataBase');


module.exports = class removehandler {
  constructor(req, res) {
    const reqParams = req.url.split('/');
    const db = new Db(reqParams[1]);
    db.remove(reqParams[2]).then((removedData) => {
      res.end(JSON.stringify(removedData));
    }, (err) => {
      res.end(JSON.stringify(err));
    });
  }
}