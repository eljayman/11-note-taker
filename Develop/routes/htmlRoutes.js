const path = require("path");
const router = require("express").Router();

router.get("/notes", (req, res, next) => {
  const options = {
    root: path.join("./public/"),
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  const fileName = "notes.html";
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

router.get("*", (req, res, next) => {
  const options = {
    root: path.join("./public/"),
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };

  const fileName = "index.html";
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err);
    } else {
      console.log("Sent:", fileName);
    }
  });
});

module.exports = router;
