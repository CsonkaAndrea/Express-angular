// Modules
const path = require('path');
const fs = require('fs');


module.exports = class DataBase {
  // A konstruktor megkapja a jsonfile nevét.
  constructor(jsonFileName) {
    // Beállítjuk a json fileokat tartalmazó mappa elérési útját.
    this.jsonDirectory = path.join(__dirname, './../json');
    // //Beállítjuk a konkrét json file teljes elérési útját.
    this.jsonFilePath = path.join(this.jsonDirectory, `${jsonFileName}.json`);
    console.log(this.jsonFilePath);

    this.key = jsonFileName.slice(0, -1) + 'ID';
  }

  add(newData) {
    return new Promise((resolve, reject) => {
      this.getJsonArray().then((dataArray) => {
        let newId = 1;
        if (dataArray.length > 0) {
          newId = dataArray[dataArray.length - 1].orderID + 1;
        }
        newData.orderID = newId;
        dataArray.push(newData);
        fs.writeFile(this.jsonFilePath, JSON.stringify(dataArray, null, 4), 'utf8', (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(newData);
          }
        });
      });
    });
  }

  putData(data, id) {
    let selectedIndex;
    this.getJsonArray().then((dataArray) => {
      for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].productID == id) {
          selectedIndex = i;
        }
      }
      for (const k in data) {
        dataArray[selectedIndex][k] = data[k];
      }
      fs.writeFileSync(this.jsonFilePath, JSON.stringify(dataArray, null, 4), 'utf8');
    });
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
            const found = dataArray.filter(item => item[this.key] == id)[0] || {};
            resolve(found);
          },
        );
      }
    });
  }

  remove(id) {
    return new Promise((resolve, reject) => {
      let selectedIndex;
      this.getJsonArray().then((dataArray) => {
        for (let i = 0; i < dataArray.length; i++) {
          if (dataArray[i].id == id) {
            selectedIndex = i;
            break;
          }
        }
        const removedData = dataArray.splice(selectedIndex, 1)[0];
        fs.writeFile(this.jsonFilePath, JSON.stringify(dataArray, null, 4), 'utf-8', (err) => {
          if (err) {
            return reject(err)
          }
          resolve(removedData);
        });
      });
    });
  }
  //

  //Megkeresi és tömbként vissza adja a json filet.
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
