const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Ahora si que vagit status'))

app.listen(3000);
console.log('listen on port 3000')
