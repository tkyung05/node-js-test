const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

let users = [
  { id: 1, name: 'tk' },
  { id: 2, name: 'tkk' },
  { id: 3, name: 'tkkk' },
];

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/users', (request, response) => {
  const DEFAULT_LIMIT = 10;
  const limit = parseInt(request.query.limit ?? DEFAULT_LIMIT);

  if (Number.isNaN(limit)) {
    return response.status(400).end();
  }
  
  response.json(users.slice(0, limit));
});

app.get('/users/:id', (request, response) => {
  const id = parseInt(request.params.id);

  if (Number.isNaN(id)) {
    return response.status(400).end();
  }

  const user = users.find((user) => user.id === id);

  if (user === undefined) {
    return response.status(404).end();
  }

  response.json(user);
})

app.delete('/users/:id', (request, response) => {
  const id = parseInt(request.params.id);

  if (Number.isNaN(id)) {
    return response.status(400).end();
  }
   
  users = users.filter((user) => user.id !== id);

  response.status(204).end();
});

app.post('/users', (request, response) => {
  const name = request.body.name;
  const id = Date.now();
  const user = { id, name };

  users.push(user);

  response.status(201).json(user);
});

app.listen(3000, function(){
  console.log('running server! port 3000');
});

module.exports = app;