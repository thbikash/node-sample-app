const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Node.js Sample App!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});
