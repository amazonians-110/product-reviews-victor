const express = require('express')
const bodyParser = require('body-parser');
const grabProduct = require('../database/index.js').grabProduct;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3008

app.get('/product/:id', function(req, res) {
  var id = req.params.id;
  grabProduct(id, (err, num) => {
    if (err) {
      res.status(404).send();
    }
    res.status(200).send(num);
  });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))