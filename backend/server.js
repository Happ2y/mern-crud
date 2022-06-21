const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.use(cors());
app.use(express.json());

/* establish connecton with database */
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connection with database established successfully...");
})

/* create routers */
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

/* start the server */
app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
})