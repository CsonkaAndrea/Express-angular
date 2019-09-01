const Db = require('./dataBase');
module.exports = class postHandler {
  constructor(req, res) {
    const reParams = req.url.split('/');
    const dB = new Db(reParams[1]);
    let allData = '';
    req.on('data', (chunk) => {
      allData += chunk;
    });
    req.on('end', () => {
      dB.add(JSON.parse(allData), reParams[2]).then(newData => res.end(JSON.stringify(newData)));
    });
  }
};