const express = require('express');
const usersRouter = express.Router();

const userController = require ('../controllers/userController');

usersRouter.get('/users', userController.getUsers);
usersRouter.get('/users/total', userController.getTotalUsers);
usersRouter.get('/users/:username?', userController.getOneUser);
usersRouter.get('/users/country/:country?', userController.getCountryUsers);
usersRouter.get('/users/vehicle/:vehicle?', userController.getVehicleUsers);


module.exports = usersRouter;