/* eslint-disable prefer-destructuring */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const grabProduct = require('../database/index.js').grabProduct;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3008;

// bundle
app.use(express.static(`${__dirname}/../client/dist`));

// api will also deliver the static files. product/:id serves my data
app.get('http://localhost:3008/api/product/:id', (req, res) => {
  const id = req.params.id;
  grabProduct(id, (err, num) => {
    if (err) {
      res.status(404).send();
    }
    res.status(200).send(num);
  });
});

// the index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

app.listen(port, () => console.log(`Now listening on port ${port}!`));
