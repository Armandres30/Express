const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  app.use('/products', productsRouter); //define first part of url as /products/... extended by productsRouter
  app.use('/categories', categoriesRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;
