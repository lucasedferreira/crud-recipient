const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

require('./src/app/Routes/index')(app);

app.listen(3333);