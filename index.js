const express = require("express");
const app = express();

//Módulos de rutas
const userRoutes = require('./routes/userRoutes')



const PORT = 3000;

app.use(express.json());// Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

//Rutas

app.use('/:username', userRoutes);
app.use('/users/total', userRoutes);
app.use('/country/:country?', userRoutes);
app.use('/', userRoutes);


app.listen(PORT, () => {
  console.info(`> Estoy arribísima en el puerto ${PORT}! ✨🦄`);
});