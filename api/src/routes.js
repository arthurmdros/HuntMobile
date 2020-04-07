const express = require('express');
const ProductController = require('./controllers/ProductController');
const DetailController = require('./controllers/DetailController');

const routes = express.Router();

routes.get('/detail', DetailController.index);

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.create);
routes.delete('/products/:id', ProductController.delete);

module.exports = routes;
