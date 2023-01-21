const express = require('express');
const usersRouter = express.Router();

const userController = require ('../controllers/userController');

usersRouter.get('/users', userController.getUsers);
usersRouter.get('/total', userController.getTotalUsers);
usersRouter.get('/users/:username?', userController.getOneUser);
usersRouter.get('/users/country/:country?', userController.getCountryUsers);


module.exports = usersRouter;