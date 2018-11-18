const express = require('express');
const helmet = require('helmet');
const knexConfig = require('./knexfile');

const server = express();
server.use(express.json());
server.use(helmet());


const doerRoute = require('./serverRoutes/doerRoute');

server.use('/doers', doerRoute);

server.get('/', (req, res) => {
  res.send('it lives!');
});



const port = 9000
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`)
})
