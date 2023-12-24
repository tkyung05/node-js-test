const express = require('express');
const morgan = require('morgan');

let users = [
  { id: 1, name: 'tk' },
  { id: 2, name: 'tkk' },
  { id: 3, name: 'tkkk' },
];

const app = express();

app.use(morgan('dev'));

app.get('/users', (request, response) => {
  const DEFAULT_LIMIT = 10;
  const limit = parseInt(request.query.limit ?? DEFAULT_LIMIT);

  if (Number.isNaN(limit)) return response.status(400).end();
  
  response.json(users.slice(0, limit));
});

app.listen(3000, function(){
  console.log('running server! port 3000');
});

module.exports = app;