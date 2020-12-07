const express = require("express");
const app = express();
const path = require("path");
const jsonServer = require("json-server");

app.use("/api", jsonServer.defaults(), jsonServer.router("db.json"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

const port = process.env.PORT || 4000;
app.listen(port);
