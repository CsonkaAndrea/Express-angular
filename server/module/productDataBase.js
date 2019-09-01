// Modules
const path = require('path');
const fs = require('fs');

module.exports = class DataBase {
  // A konstruktor megkapja a jsonfile nevét.
  constructor(jsonFileName) {
    // Beállítjuk a json fileokat tartalmazó mappa elérési útját.
    this.jsonDirectory = path.join('./../json');
    // //Beállítjuk a konkrét json file teljes elérési útját.
    this.jsonFilePath = path.join(this.jsonDirectory, `${jsonFileName}.json`);
    console.log(this.jsonFilePath);
  }

  // File megnyitása
  find(id = 0) {
    return new Promise((resolve, reject) => {
      if (id == 0) {
        this.getJsonArray().then((dataArray) => {
          resolve(dataArray);
          err => reject(err);
        });
      } else {
        this.getJsonArray().then(
          (dataArray) => {
            console.log(dataArray);
            const found = dataArray.filter(item => item.productID == id)[0] || {};
            resolve(found);
          },
        );
      }
    });
  }

  // Megkeresi és tömbként vissza adja a json filet.
  getJsonArray() {
    return new Promise((resolve, reject) => {
      fs.readFile(this.jsonFilePath, 'utf8', (err, jsonString) => {
        if (err) {
          return reject(err);
        }
        resolve(JSON.parse(jsonString));
      });
    });
  }
};
