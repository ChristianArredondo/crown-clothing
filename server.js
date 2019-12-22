const path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const isProd = process.env.NODE_ENV === 'production';
if (isProd) {
  require('dotenv').config();
}

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (isProd) {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) {
    throw error;
  }
  console.log(`Server listening on post ${port}`);
});

app.post('/ping', (req, res) => {
  res.send({ yo: 'server is alive' });
});
