const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../db/users.json');

//11
const putUsers = (req, res) => {
    const username = req.params.username;
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const email = req.body.email;
    
    if (username) {
        const usersJson = fs.readFileSync(dbPath, "utf8");
        const users = JSON.parse(usersJson);
        let userIndex = users.findIndex(user => user.username === username);
        if (userIndex !== -1) {
            users[userIndex].firstname = firstname || users[userIndex].firstname;
            users[userIndex].lastname = lastname || users[userIndex].lastname;
            users[userIndex].email = email || users[userIndex].email;
            fs.writeFileSync('db/users.json', JSON.stringify(users), 'utf8');
            res.status(200).json({firstname: users[userIndex].firstname, lastname: users[userIndex].lastname, email: users[userIndex].email});
        } else {
            res.status(404).json({
                error: 'User not found'
            });
        }
    } else {
        res.status(400).json({
            error: 'Username is required to update a user'
        });
    }
};
//12
const putVehicleUsers = (req, res) => {
    const username = req.params.username;
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const email = req.body.email;
    const vehicles = req.body.vehicles;

    
    if (username) {
        const usersJson = fs.readFileSync(dbPath, "utf8");
        const users = JSON.parse(usersJson);
        let userIndex = users.findIndex(user => user.username === username);
        if (userIndex !== -1) {
            users[userIndex].vehicles = vehicles || users[userIndex].vehicles;
            users[userIndex].firstname = firstname || users[userIndex].firstname;
            users[userIndex].lastname = lastname || users[userIndex].lastname;
            users[userIndex].email = email || users[userIndex].email;
            fs.writeFileSync('db/users.json', JSON.stringify(users), 'utf8');
            res.status(200).json({firstname: users[userIndex].firstname, lastname: users[userIndex].lastname, email: users[userIndex].email, vehicles: users[userIndex].vehicles});
        } else {
            res.status(404).json({
                error: 'User not found'
            });
        }
    } else {
        res.status(400).json({
            error: 'Username is required to update a user'
        });
    }
};
//13
const putFoodUsers = (req, res) => {
    const username = req.params.username;
    const firstname = req.body.firstName;
    const lastname = req.body.lastName;
    const email = req.body.email;
    const favouritesFood = req.body.food;

    
    if (username) {
        const usersJson = fs.readFileSync(dbPath, "utf8");
        const users = JSON.parse(usersJson);
        let userIndex = users.findIndex(user => user.username === username);
        if (userIndex !== -1) {
            users[userIndex].favouritesFood = favouritesFood || users[userIndex].favouritesFood;
            users[userIndex].firstname = firstname || users[userIndex].firstname;
            users[userIndex].lastname = lastname || users[userIndex].lastname;
            users[userIndex].email = email || users[userIndex].email;
            fs.writeFileSync('db/users.json', JSON.stringify(users), 'utf8');
            res.status(200).json({firstname: users[userIndex].firstname, lastname: users[userIndex].lastname, email: users[userIndex].email, favouritesFood: users[userIndex].favouritesFood});
        } else {
            res.status(404).json({
                error: 'User not found'
            });
        }
    } else {
        res.status(400).json({
            error: 'Username is required to update a user'
        });
    }
};
//14
const putHideUsers = (req, res) => {
    const username = req.params.username;
    const email = req.body.email;
  
    if (username && email) {
      const usersJson = fs.readFileSync(dbPath, "utf8");
      const users = JSON.parse(usersJson);
      let userIndex = users.findIndex(user => user.username === username && user.email === email);
      if (userIndex !== -1) {
        users[userIndex].visibility = false;
        fs.writeFileSync('db/users.json', JSON.stringify(users), 'utf8');
        res.status(200).json({message: 'User visibility has been successfully updated'});
      } else {
        res.status(404).json({
          error: 'User not found'
        });
      }
    } else {
      res.status(400).json({
        error: 'Both username and email are required to hide a user'
      });
    }
  };

module.exports = {
    putUsers,
    putVehicleUsers,
    putFoodUsers,
    putHideUsers
}