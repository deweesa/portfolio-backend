const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');

require('dotenv').config({ path: './config.env' })
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDb database connection established successfully");
})

app.use(require("./routes/record"));
app.use(require("./routes/blog"));

const dbo = require("./db/conn")

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})