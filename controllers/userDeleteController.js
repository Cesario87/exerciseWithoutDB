const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, '../db/users.json');

const deleteUsers = (req, res) => {
    const username = req.params.username;
    const email = req.body.email;
  
    if (username && email) {
      const usersJson = fs.readFileSync(dbPath, "utf8");
      const users = JSON.parse(usersJson);
      let userIndex = users.findIndex(user => user.username === username && user.email === email);
      if (userIndex !== -1) {
        if(users[userIndex].deleted) {
          let deletedUser = users.splice(userIndex, 1);
          fs.writeFileSync(dbPath, JSON.stringify(users), 'utf8');
          res.status(200).json({deletedUser});
        } else {
          res.status(401).json({
            error: 'User can only be deleted if the deleted field is true'
          });
        }
      } else {
        res.status(404).json({
          error: 'User not found'
        });
      }
    } else {
      res.status(400).json({
        error: 'Both username and email are required to delete a user'
      });
    }
  };


module.exports = {
    deleteUsers
}