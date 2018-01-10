const bodyParser = require('body-parser');
const path = require('path');

const express = require('express');
const https = require('https');
const port = process.env.PORT || 4444;
const app = express();
https.createServer(app);

app
	.use(bodyParser.json())
	.use(express.static(path.join(__dirname, '../client/dist')))
	.listen(port, '0.0.0.0', () => console.log(`express listening on port ${port}`));
