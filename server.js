const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'dist/poke-api-leandro/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/poke-api-leandro/browser/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor Angular funcionando en Render');
});
