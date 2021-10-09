const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());
app.use(express.json());

(async () => {
    const database = require('./src/config/database');

    try {
        await database.sync();
    } catch (error) {
        console.log(error);
    }
})();

require('./src/app/Routes/index')(app);

app.listen(3333);