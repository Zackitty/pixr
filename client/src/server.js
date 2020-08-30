const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function(_, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})
app.listen(port);
