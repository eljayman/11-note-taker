const router = require("express").Router();
const store = require("../db/store.js");

router.get("/api/notes", async (req, res) => {
  await store
    .read()

    .then((notes) => {
      console.log(notes);
      return res.send(notes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/api/notes", async (req, res) => {
  await store
    .read()

    .then((notes) => {
      console.log(notes);
      notes.append(note);
      return res.send(notes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});
module.exports = router;
