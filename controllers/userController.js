const fs = require('fs');

//1
const getUsers = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    console.log(users);
    res.status(200).json(users);
}
//2
const getOneUser = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    const username = req.params.username;
    let user = users.filter((user) => {
        return user.username === username
    }
    )[0]
    res.status(200).json(user);
}
//3
const getTotalUsers = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    let numberTotal = Object.keys(users).length;
    res.status(200).json(numberTotal);
}
//4
const getCountryUsers = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    const userCountry = req.params.country;
    let user = users.filter((user) => {
        return user.address.country === userCountry
    }
    )
    res.status(200).json(user)
}
//5
const getVehicleUsers = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    const min = req.query.min;
    const max = req.query.max;

    // Aquí se asume que la variable "users" contiene la información de los usuarios
    const filteredUsers = users.filter(user => {
        return user.vehicles.length >= min && user.vehicles.length <= max;
    });

    const response = filteredUsers.map(user => {
        return {
            email: user.email,
            username: user.username,
            img: user.img
        }
    });

    res.send(response);
};
//6
const getOneFoodUsers = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    const food = req.params.food;
    const usersWithFood = users.filter(user => user.favouritesFood.includes(food));
    res.json(usersWithFood);
};
//7
const getFoodUsers = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    let foods = [];
    for (let i = 0; i < users.length; i++) {
        foods = foods.concat(users[i].favouritesFood);
    }
    // Eliminar comidas duplicadas
    foods = [...new Set(foods)];
    res.status(200).json(foods);
}

//8
const getVehiclesUsers = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    let fuel = req.query.fuel;
    let manufacturer = req.query.manufacturer;
    let model = req.query.model;

    let filteredUsers = users.filter(user => {
        let hasVehicle = false;
        if (fuel || manufacturer || model) {
            user.vehicles.forEach(vehicle => {
                if ((!fuel || vehicle.fuel === fuel) &&
                    (!manufacturer || vehicle.manufacturer === manufacturer) &&
                    (!model || vehicle.model === model)) {
                    hasVehicle = true;
                }
            });
        } else {
            hasVehicle = true;
        }
        return hasVehicle;
    });

    const response = filteredUsers.map(user => {
        return {
            email: user.email,
            username: user.username,
            img: user.img
        }
    });

    res.json(response);
};

//9
const getVehicles2Users = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    let fuel = req.query.fuel;
    let filteredVehicles = [];

    users.forEach(user => {
      filteredVehicles = filteredVehicles.concat(user.vehicles.filter(vehicle => {
        return !fuel || vehicle.fuel === fuel;
      }));
    });

    let uniqueVehicles = [...new Set(filteredVehicles.map(item => JSON.stringify(item)))].map(str => JSON.parse(str));
    let vehiclesCount = {};
    uniqueVehicles.forEach(vehicle => {
        let count = filteredVehicles.filter(v => v.manufacturer === vehicle.manufacturer && v.model === vehicle.model).length;
        vehiclesCount[vehicle.manufacturer + ' ' + vehicle.model] = count;
    });
    res.json({ vehicles: uniqueVehicles, count: vehiclesCount });
};

module.exports = {
    getOneUser,
    getUsers,
    getTotalUsers,
    getCountryUsers,
    getVehicleUsers,
    getOneFoodUsers,
    getFoodUsers,
    getVehiclesUsers,
    getVehicles2Users,

}