const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

function staticFileServer(req, res) {
  app.get('style.css', (req, res) => {
    res.sendFile(path.join(_dirname, 'public', 'styles', 'style.css'));
  });
  app.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, 'public', 'index. html'));
  });
}
app.get('/', staticFileServer);
const port = 1800;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// app.listen(3000, () => {

// console.log("Server is running on 3000 port"); });
