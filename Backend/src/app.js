import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("HEll0");
});

export default app;
