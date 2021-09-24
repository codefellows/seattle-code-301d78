'use-strict'

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/username', (req, res) => {
  const userInfo = { name: '', password: '' };

  userInfo.name = req.query.username
  userInfo.password = req.query.password

  res.status(200).send(userInfo)
});

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));