//creating a server
const express = require('express');
const app = express();
const PORT = 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });

const path = require('path');

//required to write and create promise 
const fs = require('fs');
const promise = require('util').promisify;
const read = promise(fs.readFile);
const write = promise(fs.writeFile);

//--------------------------------------------------------------------------
//Get!!
app.get("/api/notes", function(req, res) {
    read("./develop/db/db.json", "utf8")
    .then(function(data) {
        notes = [].concat(JSON.parse(data))
        res.json(notes);
      })
  }); 
  
  
//Post!!!
app.post("/api/notes", function(req, res) {
    const note = req.body;
    read("./develop/db/db.json", "utf8")
    .then(function(data) {
        const notes = [].concat(JSON.parse(data));
        note.id = notes.length + 1
        notes.push(note);
        return notes
    }).then(function(notes) {
        write("./develop/db/db.json", JSON.stringify(notes))
        res.json(note);
    })
  });


//remove note from json
app.delete("/api/notes/:id", function(req, res) {
    const deleteId = parseInt(req.params.id);
    read("./develop/db/db.json", "utf8")
    .then(function(data) {
      const notes = [].concat(JSON.parse(data));
      const replacement = []
      for (let i = 0; i<notes.length; i++) {
        if(deleteId !== notes[i].id) {
          replacement.push(notes[i])
        }
      }
      return replacement
    }).then(function(notes) {
      write("./develop/db/db.json", JSON.stringify(notes))
      res.send('rewrite');
    })
  })
//-----------------------------------------------------------------------------------

  
//Server showing public folder files...front end...lets css elements work on page
app.use(express.static("./Develop/public"))

//set up routes...loops user when they attempt to go anywhere else on the 5000 aside from notes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname,"./Develop/public/notes.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname,"./Develop/public/index.html"));
});

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname,"./Develop/public/index.html"));
});