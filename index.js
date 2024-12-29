const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hi my server in express');
});

app.get('/new-route', (req, res) => {
  res.send('Hi, I am a new route');
});

routerApi(app);

//Order affects Errors logs response
app.use(logErrors);
app.use(boomErrorHandler); //shows boom Error Handling which are shorter and more concise
app.use(errorHandler); //shows full errors

app.listen(port, () => {
  console.log('My port' + port);
})
