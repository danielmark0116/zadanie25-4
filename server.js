const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile('/index.html');
});

app.get('/output', (req, res) => {
  const response = {
    firstName: req.query.name,
    secondName: req.query.surname
  };

  res.json(response);
});

app.listen(port, () => console.log(`Server is runningo on port ${port}`));
