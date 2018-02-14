module.exports = app => {
  const users = [
    {
      usser_id: '1',
      name: 'Pratik'
    },
    {
      usser_id: '2',
      name: 'Baniya'
    }
  ];
  app.post('/login', (req, res) => {
    const user = {
      name: req.body.name,
      usser_id: req.body.usser_id
    };
    console.log(user);
    for (index = 0; index < users.length; index++) {
      if (
        user.usser_id == users[index].usser_id &&
        user.name == users[index].name
      ) {
        res
          .status(200)
          .send({ Message: 'User is exists in our system. Logged in!' });
      }
      res.status(204).send({ Message: 'No such user! Pls register.' });
    }
  });

  app.get('/getUsers', (req, res) => {
    res.status(200).send(users);
  });

  app.post('/addUser', (req, res) => {
    const newUser = {
      name: req.body.name,
      usser_id: req.body.usser_id
    };
    for (index = 0; index < users.length; index++) {
      if (
        newUser.usser_id == users[index].usser_id &&
        newUser.name == users[index].name
      ) {
        res.status(409).send({ Message: 'User Already Exists' });
      } else {
        users.push(newUser);
        console.log(newUser);
        console.log(users);
        res.status(201).send({ Message: 'User has been added to the system' });
      }
    }
  });
};
