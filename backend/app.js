const express = require('express');
const mongoose = require('mongoose');
//место для установки всякого по мере необходиомсти

const app = express();
const { PORT = 3000 } = process.env;

mongoose
  .connect('mongodb://127.0.0.1:27017/mestodb', {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log('MongoDB is connected');
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});