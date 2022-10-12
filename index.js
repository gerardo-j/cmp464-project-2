const express = require('express');
const path = require('path');

const app = express();

app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.use('/css', express.static(path.join(__dirname, '/public/css')))
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'))
});

app.get('/gerardo', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/gerardo.html'));
});

app.post('/comment', (req, res) => {
  const comment = req?.body?.comment ;
  if (!comment) {
    res.status(400).json({message: 'Provide a comment in your body.'});
    return;
  }
  res.status(200).json(comment);
})

app.listen(3000);