const fs = require('fs');

//1
const getUsers = (req, res) => {
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
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
  // let user = "holi";
  // res.status(200).json(user);
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

module.exports = {
    getOneUser,
    getUsers,
    getTotalUsers,
    getCountryUsers,
    getVehicleUsers
}