const verificarToken = (req, res, next) => {
  // PETICIONES -> TOKEN ->
  // cabecera 
  try {
    // UUID idRol = 25132456-41d1dwq15-5ewq56
    const { authorization } = req.headers;
    if (authorization !== 'TOKEN') {
      throw new Error('No autorizado.');
    }
    req.nombreCompleto = 'Ivan Tancara'
    next();
  } catch (error) {
    res.status(401).json({
      finalizado: false,
      mensaje: error.message,
      datos: null
    });      
  }
}

module.exports = {
  verificarToken
}