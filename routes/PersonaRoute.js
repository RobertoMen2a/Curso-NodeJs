const express = require('express');
const router = express.Router();
const { PersonaController } = require('../controllers');
const { AuthMiddleware } = require('../middlewares');

router.get('/personas', PersonaController.listarPersonas);

router.get('/consumir-servicio', PersonaController.consumirServicio)

router.post('/personas', PersonaController.registrarPersona);

router.put('/personas', PersonaController.modificarPersona);

router.delete('/personas', PersonaController.eliminarPersona);

router.get('/token', PersonaController.generarToken)

router.get('/personas/html', PersonaController.listarPersonasHtml);

module.exports = router;