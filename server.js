const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('<h1>Express con html de prueba</h1>'))

app.listen(3000);
console.log('listen on port 3000')
