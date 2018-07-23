const express = require('express');

// Create a server
const PORT = 3000;
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// Add route  
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

// Start the server  
app.listen(PORT, () => {
  console.log('Server running at:', PORT);
});