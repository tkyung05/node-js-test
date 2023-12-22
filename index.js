const express = require('express');
const morgan = require('morgan');

let users = [
    { id: 1, name: 'tk' },
    { id: 2, name: 'tkk' },
    { id: 3, name: 'tkkk' },
];

const app = express();

app.use(morgan('dev'));

app.get('/users', (req, res) => {
    res.json(users)
});

app.listen(3000, function(){
    console.log('running server! port 3000');
});

module.exports = app;