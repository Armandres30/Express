const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('not allowed'));
    }
  }
}
app.use(cors());

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
