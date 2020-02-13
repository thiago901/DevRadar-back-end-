const {Router } = require('express');
const DevController = require('./controllers/DevController')
const SearcherController = require('./controllers/SearcherController')
// store: Criar
// index: mostrar Lista
// update: Alterar
// destroy: Deletar
// show: mostrar Unico


const routes = Router();

routes.get('/devs',DevController.index);
routes.post('/devs',DevController.store);

routes.get('/search',SearcherController.index);
module.exports = routes;