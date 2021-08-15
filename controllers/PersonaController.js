const { app, constants } = require('../config');
const { PersonaModel, GatoModel } = require('../models');
const axios = require('axios');
const ejs = require('ejs');
const fs = require('fs');

const registrarPersona = async (req, res) => {
  const datos = req.body;
  const personaCreada = await PersonaModel.create(datos);
  res.status(201).json({
    finalizado: true,
    mensaje: 'Persona registrada correctamente.',
    datos: personaCreada
  });
};

const modificarPersona = async (req, res) => {
  const datos = req.body;
  const personaCreada = await PersonaModel.update(datos);

  res.status(201).json({
    finalizado: true,
    mensaje: 'Persona modificada correctamente.',
    datos: personaCreada
  });
};

const eliminarPersona = async (req, res) => {
  const datos = req.body;

  const personaEliminada = await PersonaModel.deleteOne(datos);

  res.status(201).json({
    finalizado: true,
    mensaje: 'Persona eliminada correctamente.',
    datos: personaEliminada
  });
};

const listarPersonas = async (req, res) => {
  const listaPersonas = await PersonaModel.find();
  console.log('============> DESDE_LISTAR_PERSONAS_ ');
  console.log(listaPersonas);

  res.status(200).json({
    finalizado: true,
    mensaje: 'Personas listadas correctamente',
    datos: listaPersonas
  });
};

const listarPersonasHtml = async (req, res) => {
  const html = fs.readFileSync('./plantilla.ejs', 'utf8');
  const lista = await PersonaModel.find();
  console.log(lista);
  const datos = {
    titulo: 'Lista de Personas',
    listaPersonas: lista
  };

  const htmlRender = ejs.render(html, datos);
  res.send(htmlRender);
  /*console.log('============> DESDE_LISTAR_PERSONAS_HTML ');
  console.log(listaPersonas);
  res.send('<h1> TABLA PERSONAS </h1>');*/
  /*
  res.status(200).json({
    finalizado: true,
    mensaje: 'Personas listadas correctamente',
    datos: listaPersonas
  });*/
};

const generarToken = (req, res) => {
  console.log(constants);
  res.status(200).json({
    finalizado: true,
    mensaje: 'Token generado correctamente',
    datos: `e1e5wq61d56qw1dwq156dwq1655dwq6 TIEMPO ${app.expiracionToken}`
  });
};

const consumirServicio = async (req, res) => {
  const init = {
    method: 'GET',
    url: 'https://restcountries.eu/rest/v2/all'
  };

  const respuesta = await axios(init);
  console.log(respuesta.data);
  res.status(200).json({
    finalizado: true,
    mensaje: 'Servicio consumido correctamente',
    datos: respuesta.data
  });
}


module.exports = {
  listarPersonas,
  generarToken,
  registrarPersona,
  modificarPersona,
  eliminarPersona,
  listarPersonasHtml,
  consumirServicio
};