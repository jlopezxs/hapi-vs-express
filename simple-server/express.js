const express = require('express');

// Create a server
const PORT = 3000;
const app = express();

// Add route  
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Start the server  
app.listen(PORT, () => {
  console.log('Server running at:', PORT);
});