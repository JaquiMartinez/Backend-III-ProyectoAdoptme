export const errorDictionary = {
    USER_ALREADY_EXISTS: {
      code: 'USER_ALREADY_EXISTS',
      message: 'El usuario ya existe. Intenta con otro email.',
      status: 400,
    },
    INVALID_USER_DATA: {
      code: 'INVALID_USER_DATA',
      message: 'Los datos del usuario no son válidos.',
      status: 422,
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
  };  