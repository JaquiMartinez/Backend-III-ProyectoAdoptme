import { Router } from 'express';
import usersController from '../controllers/users.controller.js';
import Users from '../dao/Users.dao.js';

const router = Router();
const usersDao = new Users();

router.get('/', usersController.getAllUsers);
router.get('/:uid', usersController.getUser);
router.put('/:uid', usersController.updateUser);
router.delete('/:uid', usersController.deleteUser);

// Nueva ruta: Registro de usuario
router.post('/register', async (req, res, next) => {
  try {
    const user = await usersDao.save(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});

export default router;