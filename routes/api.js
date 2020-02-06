var express = require('express');
var fs = require('fs');
var router = express.Router();

router.get('/timeline', function(req, res, next) {
  fs.createReadStream('./data/timeline.json', {encoding: 'utf8'}).pipe(res)
});

router.get('/stats', function(req, res, next) {
  fs.createReadStream('./data/stats.json', {encoding: 'utf8'}).pipe(res)
});

router.get('/province_stats', function(req, res, next) {
  fs.readFile('./data/province_stats.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data.toString())
    res.json(jsonData)
  });
});

module.exports = router;
