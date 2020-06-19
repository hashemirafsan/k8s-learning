const app = require('express')();
const server = require('http').Server(app);
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello world'))
app.get('/v2', (req, res) => res.send('Hello world v2'))

server.listen(PORT, () => console.log('Server listening at port %d', PORT) )