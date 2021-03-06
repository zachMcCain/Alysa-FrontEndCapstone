const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {getRecommended} = require('../database/db.js');

app.use('/:product_id', express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/recommended/:product_id', function(req, res) {
  console.log(req.params);
  var id = req.params.product_id;
  getRecommended(id, function(err, records) {
    if (err) {
      throw err;
    } else {
      console.log('success response!');
      res.send(records);
    }
  });
})

// app.listen(port, () => {
//   console.log('listening to port', port);
// })

module.exports = {
  app
};