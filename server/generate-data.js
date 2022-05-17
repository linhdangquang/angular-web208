import { faker } from '@faker-js/faker';


const database = {
  products: [],
}

for (let i = 1; i <= 50; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.lorem.sentence(),
    image: faker.image.image(),
  })
}

console.log(JSON.stringify(database))