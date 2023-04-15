const express = require('express');
const app = express();

const { log } = console;
const userDevRoutes = require('./routes/ejs/user');
const gameDevRoutes = require('./routes/ejs/pages');

//! config--------
app.set('view engine', 'ejs');
app.use('/ejs', userDevRoutes);
app.use('/ejs', gameDevRoutes);

//! config--------

app.get('*', (req, res) => {
    res.send('Page not found');
})

app.listen(3000, () => {
    console.log('Serving on Port 3000');
})