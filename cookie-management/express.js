const express = require('express');
const cookieParser = require('cookie-parser');

// Create a server
const PORT = 3000;
const app = express();

app.use(cookieParser());

// Add route  
app.get('/hello', (req, res) => {
  console.log("Cookies: ", req.cookies);
  res.cookie("cookie", "true").send('Hello World!');
});

// Start the server  
app.listen(PORT, () => {
  console.log('Server running at:', PORT);
});