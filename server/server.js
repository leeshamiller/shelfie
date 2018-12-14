const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller');
const PORT = 4321;

const app = express();
app.use(bodyParser.json());




app.listen(PORT, () => console.log(`${PORT} blastoff!!`))
