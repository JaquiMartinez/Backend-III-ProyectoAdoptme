import  Router  from 'express';
import usersController from '../controllers/users.controller.js';
import Users from '../dao/Users.dao.js';
import  CustomError  from '../utils/errorHandler.js';
import errorDictionary  from '../utils/errorDictionary.js';

const router = Router();
const usersDao = new Users();

router.get('/', usersController.getAllUsers);
router.get('/:uid', usersController.getUser);
router.put('/:uid', usersController.updateUser);
router.delete('/:uid', usersController.deleteUser);

// Nueva ruta: Registro de usuario
router.post('/register', async (req, res, next) => {
    try {
      const { email, password, firstName, lastName } = req.body;
  
      // Validación de campos obligatorios
      if (!email || !password || !firstName || !lastName) {
        throw new CustomError(errorDictionary.MISSING_USER_FIELDS);
      }
  
      // Crear el usuario en la base de datos
      const newUser = await usersDao.save(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      if (error.code === 11000) {
        return next(new CustomError(errorDictionary.USER_ALREADY_EXISTS));
      }
      next(error);
    }
  });
  
  export default router;