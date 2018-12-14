const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const ctrl = require('./controller');
const {PORT, CONNECTION_STRING} = process.env;
// const PORT = 4321;

const app = express();
app.use(bodyParser.json());

app.get('/api/inventory', ctrl.getInventory)

massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    app.listen(PORT, () => console.log(`${PORT} blastoff!!`))
}).catch((err) => console.log(err))
