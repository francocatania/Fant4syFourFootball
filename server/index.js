const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4444

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log( `listening on port ${port}!`);
});
