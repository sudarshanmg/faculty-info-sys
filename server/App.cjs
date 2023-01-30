const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));


const authenticateUserRoute = require('./routes/authUser.cjs');
app.use(authenticateUserRoute);

app.listen(3001, () => {
    console.log('listening...');
}); 