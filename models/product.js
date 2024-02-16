const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    "db",
    "db.json"
)
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, data) => {
    if (err) {
      cb([])
    } else {
      cb(JSON.parse(data))
    }
  })
}

module.exports = class Product {
  constructor(title, imageUrl, desc, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.desc = desc
    this.price = price
  }
  save() {
    getProductsFromFile((products) => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products, null, 2), (err) => {
        console.log(err);
      });
    })
  }
  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
}