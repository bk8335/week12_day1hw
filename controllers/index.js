var express = require('express');
var router = new express.Router();

var films = require('films.js');


router.get('/welcome', function(req, res) {
  res.json({data: 'Welcome to this site about films'})
})

module.exports = router;