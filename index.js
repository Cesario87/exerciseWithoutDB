const express = require("express");
const app = express();

//Módulos de rutas
const userRoutes = require('./routes/userRoutes')



const PORT = 3000;

app.use(express.json());// Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

//Rutas
app.use('/', userRoutes);
app.use('/total', userRoutes);
app.use('/:username', userRoutes);
app.use('/country/:country?', userRoutes);
app.use('/vehicle/:vehicle?', userRoutes);//http://localhost:3000/users/vehicle/vehicle?min=9&max=30



app.listen(PORT, () => {
  console.info(`> Estoy arribísima en el puerto ${PORT}! ✨🦄`);
});