const path = require('path');
const express = require('express');
const compression = require('compression');


const app = express();

app.use(compression());
app.use('/build/', express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});


app.listen(3000, 'localhost', (err) => {
  if (err) {
    console.log(err);//eslint-disable-line
  } else {
    console.log('server running on port 3000'); //eslint-disable-line
  }
});
