import { Router } from 'express';
import { generateMockPets } from '../utils/mockingPets.js';
import petsController from '../controllers/pets.controller.js';
import uploader from '../utils/uploader.js';

const router = Router();

router.get('/', petsController.getAllPets);
router.post('/', petsController.createPet);
router.post('/withimage', uploader.single('image'), petsController.createPetWithImage);
router.put('/:pid', petsController.updatePet);
router.delete('/:pid', petsController.deletePet);
router.get('/mockingpets', (req, res) => { //Endpoint para obtener mascotas mock.
  const pets = generateMockPets(100); // Genera 100 mascotas por defecto.
  res.status(200).json(pets);
});

export default router;