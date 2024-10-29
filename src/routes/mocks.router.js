import { Router } from 'express';
import { generateMockPets } from '../utils/mockingPets.js';
import { generateMockUsers } from '../utils/mockingUser.js';

const router = Router();

// Endpoint para obtener mascotas mockeadas
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(100); // Genera 100 mascotas por defecto
  res.status(200).json(pets);
});

// Endpoint para obtener usuarios mock
router.get('/mockingusers', async (req, res, next) => {
    try {
      const users = await generateMockUsers(50); // Genera 50 usuarios
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  });

export default router;
