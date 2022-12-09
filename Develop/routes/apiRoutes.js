const router = require("express").Router();
const store = require("../db/store.js");

router.get("/api/notes", async (req, res) => {
  await store
    .read()

    .then((notes) => {
      return res.send(notes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/api/notes", (req, res) => {
  store
    .write(req.body)
    .then(() => {
      res.end();
    })

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete(`/api/notes/:id`, (req, res) => {
  let deletionID = req.params.id;
  store
    .delete(deletionID)
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
