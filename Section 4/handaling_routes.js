const express = require("express");

const app = express();

app.use('/', (req, res, next) => {
        console.log('This Always Run!');
        next();
})

app.use('/add-products', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>The "Add Products"</h1>')
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from express!</h1>')
});

app.listen(3000);