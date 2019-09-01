const DataBase = require('./dataBase')


module.exports = class GetHandler {
  constructor(req, res) {
    const reqParams = req.url.split('/');
    const ordersDataBase = new DataBase(reqParams[1]);
    const id = reqParams[2] || 0;

    ordersDataBase.find(id).then(
      dataArray => res.end(JSON.stringify(dataArray),
        err => {
          res.statusCode = 404;
          res.end(JSON.stringify(err));
        }
      )
    )
  }
}
