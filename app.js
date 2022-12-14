import express from "express";
import morgan from "morgan";
import rocks from "./models/rock.js";

// const express = require("express");
// const morgan = require("morgan");
// const rocks = require("./models/rock.js");
const app = express();

// MIDDLEWARE TO SEE HTTP REQUESTS
app.use(morgan("tiny"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Express Minerals App");
});

app.get("/calculator/:operator", (req, res) => {
  console.log("req.params", req.params);
  console.log("req.query", req.query);
  const { operator } = req.params;
  const { num1, num2 } = req.query;

  let value = 0;

  if (operator === "add") value = +num1 + +num2;
  if (operator === "subtract") value = +num1 - +num2;
  if (operator === "multiply") value = +num1 * +num2;
  if (operator === "divide") value = +num1 / +num2;

  res.send(`${operator} is ${value}`);
});

app.get("/hello/:firstName/:lastName", (req, res) => {
  console.log(req.params);
  const { firstName, lastName } = req.params;

  res.send(`Hello ${firstName} ${lastName}`);
});

app.get("/rocks", (req, res) => {
  res.send(rocks);
});

app.get("/rocks/:index", (req, res) => {
  console.log(req.params.index);
  res.send(rocks[req.params.index]);
});

app.get("/rocks/awesome", (req, res) => {
  //this will never be reached
  res.send(`
   <h1>Rocks are awesome!</h1>
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Bismuth_crystal_macro.jpg/800px-Bismuth_crystal_macro.jpg" >
   `);
});

app.get("/rocks/oops/:index", (req, res) => {
  const { index } = req.params;

  //   const answer = rocks[index] ? rocks[index] : `this is the index ${index}`;

  //   res.send(answer)

  if (rocks[index]) res.send(rocks[index]);
  else res.send("this is the index: " + index);
});

export default app;
// module.exports = app;
