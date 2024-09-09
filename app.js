const express = require('express');
require('dotenv').config(); 

const app = express();
const port = 8080;

app.use(express.json());
const validateInput = require('./validation');

app.get('/',validateInput,async (req, res) => {
  const a=req.body.a;
  const b=req.body.b;
  try {
    res.send({result:a+b});
  } catch (error) {
    res.status(400).send({error: error.message});
  }
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
