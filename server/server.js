const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send(`success message`);
});

app.listen(PORT, () => {
  console.log(`server on: http://localhost:${PORT}/`);
});
