const express = require('express')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const app = express()
const port = 3008

app.listen(port, () => console.log(`Example app listening on port ${port}!`))