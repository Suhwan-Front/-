const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api/login", (req, res) => {
  res.send({ ID: "test", Password: "1234" });
});

app.post("/api/signup", (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`server on: http://localhost:${PORT}/`);
});
