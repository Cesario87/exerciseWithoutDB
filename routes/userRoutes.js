const express = require('express');
const usersRouter = express.Router();

const userController = require ('../controllers/userController');
const userPostController = require ('../controllers/userPostController');
const userPutController = require ('../controllers/userPutController');
const userDeleteController = require ('../controllers/userDeleteController');

usersRouter.get('/', userController.getUsers);
usersRouter.get('/total', userController.getTotalUsers);
usersRouter.get('/food/', userController.getFoodUsers);
usersRouter.get('/food/:food', userController.getOneFoodUsers);
usersRouter.get('/:username?', userController.getOneUser);
usersRouter.get('/country/:country', userController.getCountryUsers);//http://localhost:3000/users/vehicle/vehicle?min=9&max=30
usersRouter.get('/vehicle/:vehicle?', userController.getVehicleUsers);//http://localhost:3000/users/vehicles/vehicles?fuel=Gasoline&manufacturer=Honda&model=Camaro
usersRouter.get('/vehicles/:vehicles?', userController.getVehicles2Users);//http://localhost:3000/users/vehicles/vehicles?fuel=Gasoline

usersRouter.post('', userPostController.postUsers);
usersRouter.put('/:username', userPutController.putUsers);
usersRouter.put('/:username/vehicles', userPutController.putVehicleUsers);
usersRouter.put('/:username/food', userPutController.putFoodUsers);
usersRouter.put('/:username/hide', userPutController.putHideUsers);
usersRouter.delete('/:username/delete', userDeleteController.deleteUsers);

module.exports = usersRouter;