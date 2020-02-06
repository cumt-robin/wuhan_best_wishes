var request = require('request');
var fs = require('fs');

const BASE_URL = 'http://49.232.173.220:3001'
const interval = 1000 * 60 * 15; //15分钟抓一次

function requestDataTask() {
    getData();
    dynamicRefreshData();
}

function dynamicRefreshData() {
    setInterval(() => {
        getData();
    }, interval);
}

function getData() {
    getTimelineData();
    getStatsData();
}

function getTimelineData() {
    request.get(`${BASE_URL}/data/getTimelineService`).pipe(fs.createWriteStream('./assets/json/timeline.json'))
}

function getStatsData() {
    request.get(`${BASE_URL}/data/getStatisticsService`).pipe(fs.createWriteStream('./assets/json/stats.json'))
}

module.exports = {
    requestDataTask
};