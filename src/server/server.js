const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './../../dist')));

app.listen(3000, (err) => {
	if (err) console.log('error in starting server' , err);
	else console.log('Connected on port 3000!');
});