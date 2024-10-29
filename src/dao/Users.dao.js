import userModel from "./models/User.js";
import errorDictionary from "../utils/errorDictionary.js";

export default class Users {
  // Obtener usuarios por parámetros
  get = (params) => userModel.find(params);

  // Obtener un usuario específico por parámetros
  getBy = (params) => userModel.findOne(params);

  // Guarda un usuario individual
  save = async (doc) => {
    try {
      const existingUser = await this.getBy({ email: doc.email });
      if (existingUser) {
        const error = new Error(errorDictionary.USER_ALREADY_EXISTS.message);
        error.code = errorDictionary.USER_ALREADY_EXISTS.code;
        throw error;
      }
      return userModel.create(doc);
    } catch (error) {
      throw error; // Se maneja en el middleware `errorHandler`
    }
  };

  // Guardar múltiples usuarios
  saveMany = async (docs) => {
    try {
      const emails = docs.map((doc) => doc.email);
      const existingUsers = await userModel.find({ email: { $in: emails } });

      if (existingUsers.length > 0) {
        const error = new Error(errorDictionary.USER_ALREADY_EXISTS.message);
        error.code = errorDictionary.USER_ALREADY_EXISTS.code;
        throw error;
      }
      
      return userModel.insertMany(docs); // Inserta los documentos
    } catch (error) {
      throw error; // Se maneja en el middleware `errorHandler`
    }
  };

  // Actualiza un usuario por ID
  update = (id, doc) => userModel.findByIdAndUpdate(id, { $set: doc });

  // Elimina un usuario por ID
  delete = (id) => userModel.findByIdAndDelete(id);
}