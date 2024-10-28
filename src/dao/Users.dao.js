import userModel from "./models/User.js";
import errorDictionary from "../utils/errorDictionary.js";
export default class Users {
    
    get = (params) => {
        return userModel.find(params);
      };
    
      getBy = (params) => {
        return userModel.findOne(params);
      };
    
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
    
      update = (id, doc) => {
        return userModel.findByIdAndUpdate(id, { $set: doc });
      };
    
      delete = (id) => {
        return userModel.findByIdAndDelete(id);
      };
    }