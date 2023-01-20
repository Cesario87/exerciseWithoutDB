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

module.exports = {
    getOneUser,
    getUsers,
    getTotalUsers,
    getCountryUsers
}