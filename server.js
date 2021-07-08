const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("./Develop/public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());