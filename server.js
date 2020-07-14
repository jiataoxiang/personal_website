const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express()

//body-parser middleware
app.use(bodyParser.json());

//DB config
const db = require("./config/keys").mongoURI;

mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {console.log("mongodb connected")})
.catch(err => {console.log(err)});

app.use("/api/items", items);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)})