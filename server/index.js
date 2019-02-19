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

app.use('/product/:id', express.static(`${__dirname}/../client/dist`));

app.get('/product/:id/review', (req, res) => {
  const id = req.params.id;
  grabProduct(id, (err, num) => {
    if (err) {
      res.status(404).send();
    }
    res.status(200).send(num);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
