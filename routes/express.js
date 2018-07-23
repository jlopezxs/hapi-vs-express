const express = require('express');

// Create a server
const PORT = 3000;
const app = express();

// Add route  
app.get('/hello/:id(\\d+)', (req, res) => {
  res.send(`Hello ${req.params.id}!`);
});

// Start the server  
app.listen(PORT, () => {
  console.log('Server running at:', PORT);
});