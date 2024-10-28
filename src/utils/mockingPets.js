import { faker } from '@faker-js/faker';

function generateMockPets(count = 100) {
  const pets = [];

  for (let i = 0; i < count; i++) {
    pets.push({
      _id: faker.database.mongodbObjectId(), // Simula un ID de MongoDB
      name: faker.animal.cat(), // Nombre de un animal (cat, dog, etc.)
      species: faker.helpers.arrayElement(['cat', 'dog', 'bird']),
      age: faker.datatype.number({ min: 1, max: 15 }),
      breed: faker.animal.type(),
      adopted: false,
    });
  }

  return pets;
}

module.exports = { generateMockPets };
