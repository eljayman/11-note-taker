const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res, next) => {
  console.log("request", req.params);

  res.sendFile(path.join(__dirname, "../../public/notes.html"), (err) => {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", "notes.html");
    }
  });
});

router.get("*", (req, res, next) => {
  console.log("request", req.params);

  res.sendFile(path.join(__dirname, "../../public/index.html"), (err) => {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", "index.html");
    }
  });
});

module.exports = router;
