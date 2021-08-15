const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser =  require('body-parser');
const { PersonaRoute } = require('./routes');

// CONEXION
const mongoose = require('mongoose');
const { db } = require('./config');
mongoose.connect(db.urlConexion, { useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.json());

app.use(PersonaRoute);


app.listen(port, () => {
  console.log(`===> Funcionando en el puerto ${port}`);
});


