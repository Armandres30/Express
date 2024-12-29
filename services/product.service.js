const { faker } = require("@faker-js/faker");

class ProductService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit ; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(), //faker provides random productName
        price: parseInt(faker.commerce.price(), 10), //parse String to Int
        image: faker.image.url(), //provides random image Url
      });
    }
  }
  create() {

  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id == id);
  }

  update() {

  }

  delete() {

  }

}

module.exports = ProductService;
