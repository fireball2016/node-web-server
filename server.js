const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  // res.send('<h1>hello express!</h1>');
  res.send({
    name: 'Jake',
    likes: [
      'driving',
      'eating'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'unable to process request'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
