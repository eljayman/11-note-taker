const express = require("express");
const PORT = 3001;
const app = express();
const routes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use(routes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
