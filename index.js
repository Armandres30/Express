const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hi my server in express');
});

app.get('/new-route', (req, res) => {
  res.send('Hi, I am a new route');
});

routerApi(app);

app.listen(port, () => {
  console.log('My port' + port);
})
