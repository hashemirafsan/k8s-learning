const app = require('express')();
const server = require('http').Server(app);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello world'))

server.listen(PORT, () => console.log('Server listening at port %d', PORT) )