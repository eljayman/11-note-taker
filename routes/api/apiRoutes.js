const router = require("express").Router();
const store = require("../../db/store.js");

router.get("/notes", async (req, res) => {
  console.log("/notes GET request");
  await store
    .read()

    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/notes", (req, res) => {
  store
    .write(req.body)
    .then(() => {
      res.end();
    })

    .catch((err) => {
      res.status(500).json(err);
    });
});

router.delete(`/notes/:id`, (req, res) => {
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
