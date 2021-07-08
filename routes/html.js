const path = require('path');
const router = require('express').Router();

//set up routes...connecting to html files
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname,"./Develop/public/notes.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"./Develop/public/index.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname,"./Develop/public/index.html"));
});

module.exports = router;