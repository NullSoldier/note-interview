var express = require('express');
var { Database, Note } = require('./database.js')

var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
