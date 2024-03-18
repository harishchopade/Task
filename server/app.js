const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./router/user-route');

const corsoptions = {
    origin: 'http://localhost:5173/',
    methods: "GET,POST,PUT,DELETE,OPTIONS,PATCH",
    Credential: true,
}

app.use(cors(corsoptions))
app.use(express.json());
app.use("/api", userRoute);

const bodyParser = require('body-parser');
app.use(bodyParser.json());



module.exports = app;
