const express = require('express');
const app = express();
app.listen(3000, () => console.log('start! express server on 3000!'));

app.use(express.static('public'));

app.get('/', function(req, res) {
  // res.send('<h1>hi friend!</h1>');
   res.sendFile(__dirname + '/public/main.html');
});

app.get('/main', function(req, res) {
  res.send('<h1>hi friend!</h1>');
  //  res.sendFile(__dirname + '/public/main.html');
});

