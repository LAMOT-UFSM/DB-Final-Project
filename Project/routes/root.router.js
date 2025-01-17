const express = require("express");
const path = require("path");
const rootRouter = express.Router();

rootRouter.get("/", async (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname, "..", "public", "home.html"));
  } catch (error) {
    console.log({ message: error });
  }
});

module.exports = rootRouter;
