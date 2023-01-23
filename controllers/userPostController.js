const uuid = require('uuid');
const fs = require('fs');

const postUsers = (req, res) => {
  const email = req.body.email;
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const username = req.body.username;

  if (email && firstname && lastname && username) {
    const newUser = {
      id: uuid.v4(),
      email: email,
      firstname: firstname,
      lastname: lastname,
      username: username,
      createdAt: new Date().toISOString()
    };

    // code to save the new user in the database
    const usersJson = fs.readFileSync("db/users.json", "utf8");
    const users = JSON.parse(usersJson);
    users.push(newUser);
    fs.writeFileSync('db/users.json', JSON.stringify(users), 'utf8');

    res.status(201).json(newUser);
  } else {
    res.status(400).json({
      error: 'Email, firstname, lastname and username are required to create a user'
    });
  }
};

module.exports = {
  postUsers
}