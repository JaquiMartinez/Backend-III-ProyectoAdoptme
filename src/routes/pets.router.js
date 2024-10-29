import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';
import { CustomError } from '../utils/errorHandler.js';
import { errorDictionary } from '../utils/errorDictionary.js'; 

const router = Router();

router.get('/', petsController.getAllPets);

// Crear una mascota
router.post('/', async (req, res, next) => {
  try {
    const { name, species, age } = req.body;

    //Verificar campos requeridos
    if (!name || !species || !age) {
      throw new CustomError(errorDictionary.MISSING_USER_FIELDS);
    }

    // Crear la mascota
    const pet = await petsController.createPet(req.body);
    res.status(201).json(pet);
  } catch (error) {
    if (error.code === 11000) {
      // Manejar error de duplicado (mascota con el mismo nombre)
      return next(new CustomError(errorDictionary.PET_ALREADY_EXISTS));
    }
    next(new CustomError(errorDictionary.PET_CREATION_FAILED));
  }
});

// Crear una mascota con imagen subida
router.post('/withimage', uploader.single('image'), async (req, res, next) => {
  try {
    const petData = {
      ...req.body,
      image: req.file.path,
    };

    const pet = await petsController.createPetWithImage(petData);
    res.status(201).json(pet);
  } catch (error) {
    next(new CustomError(errorDictionary.PET_CREATION_FAILED));
  }
});

// Actualizar una mascota
router.put('/:pid', petsController.updatePet);

// Eliminar una mascota
router.delete('/:pid', petsController.deletePet);

// Endpoint para obtener mascotas mock
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(100); // Genera 100 mascotas por defecto.
  res.status(200).json(pets);
});

export default router;