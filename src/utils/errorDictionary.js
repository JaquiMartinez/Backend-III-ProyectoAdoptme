export const errorDictionary = {
    
    USER_ALREADY_EXISTS: {
      code: 'USER_ALREADY_EXISTS',
      message: 'El usuario ya existe. Intenta con otro email.',
      status: 400,
    },
    USER_NOT_FOUND: {
      code: 'USER_NOT_FOUND',
      message: 'El usuario no fue encontrado.',
      status: 404,
    },
    USER_UPDATE_FAILED: {
      code: 'USER_UPDATE_FAILED',
      message: 'Hubo un error al intentar actualizar el usuario.',
      status: 500,
    },
    USER_DELETE_FAILED: {
      code: 'USER_DELETE_FAILED',
      message: 'Hubo un error al intentar eliminar el usuario.',
      status: 500,
    },
    INVALID_USER_DATA: {
      code: 'INVALID_USER_DATA',
      message: 'Los datos del usuario no son válidos.',
      status: 422,
    },
    INVALID_EMAIL_FORMAT: {
      code: 'INVALID_EMAIL_FORMAT',
      message: 'El email no tiene un formato válido.',
      status: 400,
    },
    INVALID_PASSWORD_FORMAT: {
      code: 'INVALID_PASSWORD_FORMAT',
      message: 'La contraseña debe tener al menos 8 caracteres, incluir al menos una letra mayúscula, un número y un carácter especial.',
      status: 400,
    },
    MISSING_USER_FIELDS: {
      code: 'MISSING_USER_FIELDS',
      message: 'Los campos obligatorios deben ser completados en el registro del usuario.',
      status: 400,
    },
    PET_CREATION_FAILED: {
      code: 'PET_CREATION_FAILED',
      message: 'Hubo un error al intentar crear la mascota.',
      status: 500,
    },
    PET_ALREADY_EXISTS: {
      code: 'PET_ALREADY_EXISTS',
      message: 'Ya existe una mascota con ese nombre.',
      status: 400,
    },
    PET_NOT_FOUND: {
      code: 'PET_NOT_FOUND',
      message: 'La mascota no fue encontrada.',
      status: 404,
    },
    PET_FETCH_FAILED: {
      code: 'PET_FETCH_FAILED',
      message: 'Error al obtener las mascotas.',
      status: 500,
    },
    PET_UPDATE_FAILED: {
      code: 'PET_UPDATE_FAILED',
      message: 'No se pudo actualizar la mascota.',
      status: 500,
    },
    PET_DELETE_FAILED: {
      code: 'PET_DELETE_FAILED',
      message: 'No se pudo eliminar la mascota.',
      status: 500,
    },
  };  