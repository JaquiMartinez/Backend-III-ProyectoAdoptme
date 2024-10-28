import { errorDictionary } from '../utils/errorDictionary';
export function errorHandler(err, req, res, next) {
  const error = errorDictionary[err.code] || {
    code: 'UNKNOWN_ERROR',
    message: 'Ocurrió un error inesperado.',
    status: 500,
  };

  res.status(error.status).json({ code: error.code, message: error.message });
}