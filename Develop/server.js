const express = require("express");
const PORT = 3001;
const app = express();
// const routes = require("./routes/apiRoutes");

const notesDataLoc = "./db/db.json";
const fs = require("fs");

let notesData;

function readNotes() {
  fs.readFile(notesDataLoc, (err, data) => {
    if (err) {
      console.log(err);
    }
    let notesData = JSON.parse(data);
    console.log(notesData);
  });
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
// app.use(routes);

app.get("/api/notes", (req, res) => {
  readNotes();
  res.send({ notesData });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
