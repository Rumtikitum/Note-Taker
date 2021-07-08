//est some constants
const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("./Develop/public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GET, POST DELETE

app.get("/api/notes", function(req, res) {

}); 


app.post("/api/notes", function(req, res) {

});


app.delete("/api/notes/:id", function(req, res) {

})


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