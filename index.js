const express = require('express');
const path = require('path');

const app = express();

app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.use('/css', express.static(path.join(__dirname, '/public/css')))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.get('/gerardo', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/gerardo.html'));
});

app.listen(3000);