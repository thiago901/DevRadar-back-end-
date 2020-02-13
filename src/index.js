const express = require('express');
const mongo = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongo.connect('mongodb+srv://tsrocha:tsrocha@cluster0-fwgrk.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
console.log('Servidore rodando na porta 3333');

