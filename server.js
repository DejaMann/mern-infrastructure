const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')
// ^ path for files in node 
require('dotenv').config()
require('./config/database');
// ^ connecting to database

const app = express()
const PORT = process.env.PORT || 3001;
// ^^ Setting PORT to 3001 during development to avoid collision with React's dev server

// == Middlewares
app.use(morgan('dev'))
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))
app.use(require('./config/checkToken'))


// Put API routes here before the 'catch all' route
app.use('/api/users', require('./routes/api/users'))
// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));


// "Catch-all" sending all requests to index.html
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
    // ^^ telling path to look for folder "build" and file index.html
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})