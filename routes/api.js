var express = require('express');
var request = require('request');
var fs = require('fs');
var { BASE_URL } = require('../config/index');
var router = express.Router();

router.get('/timeline', function(req, res, next) {
  fs.createReadStream('./data/timeline.json', {encoding: 'utf8'}).pipe(res)
});

router.get('/stats', function(req, res, next) {
  fs.readFile('./data/stats.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data.toString())
    res.json(jsonData)
  });
});

router.get('/province_stats', function(req, res, next) {
  fs.readFile('./data/province_stats.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data.toString())
    const sortedArr = jsonData.sort((a, b) => {
      return b.confirmedCount - a.confirmedCount
    })
    res.json(sortedArr)
  });
});

router.get('/city_stats/:areaName', function(req, res, next) {
  request.get(encodeURI(`${BASE_URL}/data/getAreaStat/${req.params.areaName}`)).pipe(res)
});


router.get('/oversea_stats', function(req, res, next) {
  fs.readFile('./data/oversea_stats.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data.toString())
    const sortedArr = jsonData.sort((a, b) => {
      return b.confirmedCount - a.confirmedCount
    })
    res.json(sortedArr)
  });
});

router.get('/rumour', function(req, res, next) {
  fs.readFile('./data/rumour.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data.toString())
    res.json(jsonData)
  });
});

router.get('/protect_wiki', function(req, res, next) {
  fs.readFile('./data/protect_wiki.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data.toString())
    res.json(jsonData)
  });
});

router.get('/wiki', function(req, res, next) {
  fs.readFile('./data/wiki.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data.toString())
    res.json(jsonData)
  });
});

router.get('/help_links', function(req, res, next) {
  fs.readFile('./data/help_links.json', (err, data) => {
    if (err) throw err;
    const jsonData = JSON.parse(data.toString())
    res.json(jsonData)
  });
});

module.exports = router;
