const path = require("path");
const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
app.use(express.json());


app.use("/", express.static(path.join(__dirname, "build")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(PORT, async function() {
    console.log(`Listening on Port ${PORT}`);
});

