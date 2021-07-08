//est some constants
const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static("./Develop/public"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Read and Write
router.get("/notes", function(req, res){
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
router.post("/notes", function(req, res){
    notes.addNotes(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
})
router.delete("/notes/:id", function(req, res){
    notes.removeNote(req.params.id)
    .then(() => res.json({ok: true}))
    .catch(err => res.status(500).json(err));
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