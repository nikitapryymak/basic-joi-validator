const express = require("express");
const Joi = require("joi");
const { validateSignup } = require("./validator");
const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
  const { error, value } = validateSignup(req.body);

  if (error) {
    console.log(error);
    return res.send(error.details);
  }

  res.send("Successfully signed up!");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
