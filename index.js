const express = require('express');
const morgan = require('morgan');

const app = express();

let users = [
    { id: 1, name: 'tk' },
    { id: 2, name: 'tkk' },
    { id: 3, name: 'tkkk' },
]

app.use(morgan('dev'));

app.get('/users', (req, res) => {
    res.json(users)
});

app.listen(3000, function(){
    console.log('running');
});