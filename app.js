const express = require('express');
const app = express();
const port = 3000; 



app.get('/gif', (req, res) => {
   'anal/Starl.gif' 
  const gifPath = 'anal/Starl.gif';

 
  res.sendFile(gifPath, { root: __dirname });
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
