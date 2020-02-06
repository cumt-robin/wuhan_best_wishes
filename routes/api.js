var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/timeline', function(req, res, next) {
  fs.createReadStream('./assets/json/timeline.json').pipe(res)
});

router.get('/stats', function(req, res, next) {
  fs.createReadStream('./assets/json/stats.json').pipe(res)
});

module.exports = router;
