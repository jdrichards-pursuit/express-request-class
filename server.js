import app from "./app.js";
import * as dotenv from "dotenv";
dotenv.config();

// const app = require("./app.js");
// require("dotenv").config();

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
