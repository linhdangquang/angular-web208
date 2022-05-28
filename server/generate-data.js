const { faker } = require('@faker-js/faker');
const fs = require("fs");



const generateData = () => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      id: i,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.food(),
      description: faker.lorem.paragraph(),
    status: faker.datatype.boolean(),
    })
  }
  return data;

}


fs.writeFileSync('db.json', JSON.stringify({products: generateData()}));