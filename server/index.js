const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.listen(4444, function() {
  console.log('listening on port 4444!');
});
