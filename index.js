const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./routes/api/index");
//Basic cfg

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});

app.use("/api", routes);

app.get("/", (req, res) => {
  res.redirect("/api/productos");
});
