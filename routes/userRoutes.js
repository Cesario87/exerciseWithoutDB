const express = require('express');
const usersRouter = express.Router();

const userController = require ('../controllers/userController');
const userPostController = require ('../controllers/userPostController');
const userPutController = require ('../controllers/userPutController');
const userDeleteController = require ('../controllers/userDeleteController');

usersRouter.get('/users', userController.getUsers);
usersRouter.get('/users/total', userController.getTotalUsers);
usersRouter.get('/users/food/', userController.getFoodUsers);
usersRouter.get('/users/food/:food', userController.getOneFoodUsers);
usersRouter.get('/users/:username?', userController.getOneUser);
usersRouter.get('/users/country/:country', userController.getCountryUsers);//http://localhost:3000/users/vehicle/vehicle?min=9&max=30
usersRouter.get('/users/vehicle/:vehicle?', userController.getVehicleUsers);//http://localhost:3000/users/vehicles/vehicles?fuel=Gasoline&manufacturer=Honda&model=Camaro
usersRouter.get('/users/vehicles/:vehicles?', userController.getVehicles2Users);//http://localhost:3000/users/vehicles/vehicles?fuel=Gasoline

usersRouter.post('/users', userPostController.postUsers);
usersRouter.put('/users/:username', userPutController.putUsers);
usersRouter.put('/users/:username/vehicles', userPutController.putVehicleUsers);
usersRouter.put('/users/:username/food', userPutController.putFoodUsers);
usersRouter.put('/users/:username/hide', userPutController.putHideUsers);
usersRouter.delete('/users/:username/delete', userDeleteController.deleteUsers);

module.exports = usersRouter;

// const path = require('path');
// const express = require('express');
// const usersRouter = express.Router();

// const userController = require ('../controllers/userController');
// const userPostController = require ('../controllers/userPostController');
// const userPutController = require ('../controllers/userPutController');
// const userDeleteController = require ('../controllers/userDeleteController');

// usersRouter.get(path.join(__dirname, 'users',''), userController.getUsers);
// usersRouter.get(path.join(__dirname, 'users', 'total'), userController.getTotalUsers);
// usersRouter.get(path.join(__dirname, 'users', 'food',''), userController.getFoodUsers);
// usersRouter.get(path.join(__dirname, 'users', 'food',':food'), userController.getOneFoodUsers);
// usersRouter.get(path.join(__dirname, 'users',':username?'), userController.getOneUser);
// usersRouter.get(path.join(__dirname, 'users', 'country',':country'), userController.getCountryUsers);
// usersRouter.get(path.join(__dirname, 'users', 'vehicle',':vehicle?'), userController.getVehicleUsers);
// usersRouter.get(path.join(__dirname, 'users', 'vehicles',':vehicles?'), userController.getVehicles2Users);

// usersRouter.post(path.join(__dirname, 'users',''), userPostController.postUsers);
// usersRouter.put(path.join(__dirname, 'users',':username'), userPutController.putUsers);
// usersRouter.put(path.join(__dirname, 'users',':username','vehicles'), userPutController.putVehicleUsers);
// usersRouter.put(path.join(__dirname, 'users',':username','food'), userPutController.putFoodUsers);
// usersRouter.put(path.join(__dirname, 'users',':username','hide'), userPutController.putHideUsers);
// usersRouter.delete(path.join(__dirname, 'users',':username','delete'), userDeleteController.deleteUsers);

// module.exports = usersRouter;

// const express = require('express');
// const usersRouter = express.Router();

// const userController = require ('../controllers/userController');
// const userPostController = require ('../controllers/userPostController');
// const userPutController = require ('../controllers/userPutController');
// const userDeleteController = require ('../controllers/userDeleteController');

// usersRouter.get('/', userController.getUsers);
// usersRouter.get('/total', userController.getTotalUsers);
// usersRouter.get('/food/', userController.getFoodUsers);
// usersRouter.get('/food/:food', userController.getOneFoodUsers);
// usersRouter.get('/:username?', userController.getOneUser);
// usersRouter.get('/country/:country', userController.getCountryUsers);//http://localhost:3000/users/vehicle/vehicle?min=9&max=30
// usersRouter.get('/vehicle/:vehicle?', userController.getVehicleUsers);//http://localhost:3000/users/vehicles/vehicles?fuel=Gasoline&manufacturer=Honda&model=Camaro
// usersRouter.get('/vehicles/:vehicles?', userController.getVehicles2Users);//http://localhost:3000/users/vehicles/vehicles?fuel=Gasoline

// usersRouter.post('', userPostController.postUsers);
// usersRouter.put('/:username', userPutController.putUsers);
// usersRouter.put('/:username/vehicles', userPutController.putVehicleUsers);
// usersRouter.put('/:username/food', userPutController.putFoodUsers);
// usersRouter.put('/:username/hide', userPutController.putHideUsers);
// usersRouter.delete('/:username/delete', userDeleteController.deleteUsers);

// module.exports = usersRouter;