const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middleware/error.handler');

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

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port' + port);
})
