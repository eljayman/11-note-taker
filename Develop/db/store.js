const util = require("util");
const fs = require("fs");
// const uuid = require("uuid/v1");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
  read() {
    return readFileAsync("./db/db.json", "utf-8");
  }
  write(note) {
    return writeFileAsync("./db.json", JSON.stringify(note));
  }
  // getNotes() {
  //   readFileAsync("./db/db.json", "utf-8", (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //     (data) => {
  //       JSON.stringify(data);
  //     };
  //   });
}
// async addNote();
// async removeNote();

// const example = new Store();
// example.getNotes();

module.exports = new Store();
