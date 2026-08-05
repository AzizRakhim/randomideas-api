const express = require("express");
const port = 5000;

const app = express();

const ideasRouter = require("./routes/ideas");

app.use("/api/ideas", ideasRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the RandomIdeas API" });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
