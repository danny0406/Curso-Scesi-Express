const express = require("express");
const sequelize = require('./config/database.config.js');
require('dotenv').config();

const route_healthy = require('./routes/healthy.routes');
const route_product = require('./routes/products.routes');
const route_user = require('./routes/users.routes');

const app = express();

// Sincronizar Sequelize con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Conectado a la base de datos PostgreSQL con Sequelize');
  })
  .catch((err) => {
    console.error('No se pudo conectar a la base de datos:', err);
  });


// Middleware para procesar cuerpos JSON
app.use(express.json());

app.use("/", route_healthy);

app.use("/products", route_product);

app.use("/users", route_user);



const SERVER_PORT = process.env.SERVER_PORT;

app.listen(SERVER_PORT, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Servidor escuchando en el puerto ${SERVER_PORT}`);
  }
});


