import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

const PASSWORD = 'coder123';  // Contraseña fija
const SALT_ROUNDS = 10;

// Función para generar usuarios de prueba
export const generateMockUsers = async (quantity) => {
  const hashedPassword = await bcrypt.hash(PASSWORD, SALT_ROUNDS);
  const roles = ['user', 'admin']; // Roles disponibles

  const users = Array.from({ length: quantity }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashedPassword, // Contraseña encriptada
    role: roles[Math.floor(Math.random() * roles.length)], // "user" o "admin"
    pets: [], // Array vacío
    createdAt: faker.date.recent(), // Fecha de creación simulada
  }));

  return users;
};