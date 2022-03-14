const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const credentials = require('./config/database');

const app = express();

const identifiantRoutes = require('./routes/identifiant');
const userRoutes = require('./routes/user');

mongoose.connect('mongodb+srv://' + credentials.user + ':' + credentials.pass + credentials.cluster, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

// debut de chaque route 
app.use('/api', identifiantRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;