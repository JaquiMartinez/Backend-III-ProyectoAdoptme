import petModel from "./models/Pet.js";
import { CustomError } from "../utils/errorHandler.js";
import { errorDictionary } from "../utils/errorDictionary.js";

export default class Pets {
  // Obtener varias mascotas por parámetros
  async get(params) {
    try {
      return await petModel.find(params);
    } catch (error) {
      throw new CustomError(errorDictionary.PET_FETCH_FAILED); // Error en la obtención
    }
  }

  // Obtener una mascota específica por parámetros
  async getBy(params) {
    try {
      const pet = await petModel.findOne(params);
      if (!pet) throw new CustomError(errorDictionary.PET_NOT_FOUND); // No encontrada
      return pet;
    } catch (error) {
      throw new CustomError(errorDictionary.PET_FETCH_FAILED);
    }
  }

  // Guardar una nueva mascota
  async save(doc) {
    try {
      return await petModel.create(doc);
    } catch (error) {
      if (error.code === 11000) {
        throw new CustomError(errorDictionary.PET_ALREADY_EXISTS); // Mascota existente
      }
      throw new CustomError(errorDictionary.PET_CREATION_FAILED);
    }
  }

  // Guardar múltiples mascotas
  async saveMany(docs) {
    try {
      return await petModel.insertMany(docs); // Inserta los documentos
    } catch (error) {
      if (error.code === 11000) {
        throw new CustomError(errorDictionary.PET_ALREADY_EXISTS); // Mascota existente
      }
      throw new CustomError(errorDictionary.PET_CREATION_FAILED);
    }
  }

  // Actualizar una mascota por ID
  async update(id, doc) {
    try {
      const updatedPet = await petModel.findByIdAndUpdate(id, { $set: doc }, { new: true });
      if (!updatedPet) throw new CustomError(errorDictionary.PET_NOT_FOUND);
      return updatedPet;
    } catch (error) {
      throw new CustomError(errorDictionary.PET_UPDATE_FAILED);
    }
  }

  // Eliminar una mascota por ID
  async delete(id) {
    try {
      const deletedPet = await petModel.findByIdAndDelete(id);
      if (!deletedPet) throw new CustomError(errorDictionary.PET_NOT_FOUND);
      return deletedPet;
    } catch (error) {
      throw new CustomError(errorDictionary.PET_DELETE_FAILED);
    }
  }
}
