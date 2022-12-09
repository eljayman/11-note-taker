const util = require("util");
const fs = require("fs");
const { v1: uuidv1 } = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("./db/db.json", "utf-8");
  }
  write(note) {
    let notes;
    note.id = uuidv1();
    return readFileAsync("./db/db.json", "utf-8")
      .then((data) => {
        notes = JSON.parse(data);
        notes.push(note);
      })
      .then(() => {
        return writeFileAsync("./db/db.json", JSON.stringify(notes, null, 2));
      });
  }
  delete(id) {
    let notes;
    return readFileAsync("./db/db.json", "utf-8")
      .then((data) => {
        notes = JSON.parse(data);
        const indexOfNotes = notes.findIndex((object) => {
          return object.id === id;
        });
        notes.splice(indexOfNotes, 1);
      })
      .then(() => {
        return writeFileAsync("./db/db.json", JSON.stringify(notes, null, 2));
      });
  }
}
module.exports = new Store();
