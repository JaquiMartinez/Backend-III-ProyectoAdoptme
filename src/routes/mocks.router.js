import  Router  from 'express';
import  generateMockPets  from '../utils/mockingPets.js';
import  generateMockUsers  from '../utils/mockingUser.js';
import Users from '../dao/Users.dao.js';
import Pets from '../dao/Pets.dao.js';

const router = Router();
const UsersDao = new Users();
const Petsdao = new Pets(); 

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

// Endpoint para generar e insertar datos en la base de datos
router.post('/generateData', async (req, res, next) => {
    try {
      const { users = 0, pets = 0 } = req.body;
  
      // Genera los registros
      const generatedUsers = await generateMockUsers(users);
      const generatedPets = generateMockPets(pets);
  
      // Inserta en la base de datos
      const insertedUsers = await usersDao.saveMany(generatedUsers);
      const insertedPets = await petsDao.saveMany(generatedPets);
  
      res.status(201).json({
        message: 'Datos generados correctamente',
        users: insertedUsers.length,
        pets: insertedPets.length,
      });
    } catch (error) {
      next(error);
    }
  });

export default router;
