var request = require('request');
var fs = require('fs');
var { BASE_URL } = require('../config/index');

const interval = 1000 * 60 * 15; // 15分钟抓一次数据

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
    getProvinceStatsData();
    getOverseaStatsData();
    getRumourData();
    getWikiData();
    getProtectWikiData();
    getHelpLinks();
}

function getTimelineData() {
    request.get(`${BASE_URL}/data/getTimelineService`).pipe(fs.createWriteStream('./data/timeline.json'))
}

function getStatsData() {
    request.get(`${BASE_URL}/data/getStatisticsService`).pipe(fs.createWriteStream('./data/stats.json'))
}

function getProvinceStatsData(){
    request.get(`${BASE_URL}/data/getListByCountryTypeService1`).pipe(fs.createWriteStream('./data/province_stats.json'))
}

function getOverseaStatsData() {
    request.get(`${BASE_URL}/data/getListByCountryTypeService2`).pipe(fs.createWriteStream('./data/oversea_stats.json'))
}

function getRumourData() {
    request.get(`${BASE_URL}/data/getIndexRumorList`).pipe(fs.createWriteStream('./data/rumour.json'))
}

function getWikiData() {
    request.get(`${BASE_URL}/data/getWikiList`).pipe(fs.createWriteStream('./data/wiki.json'))
}

function getProtectWikiData() {
    request.get(`${BASE_URL}/data/getIndexRecommendList`).pipe(fs.createWriteStream('./data/protect_wiki.json'))
}

function getHelpLinks() {
    request.get(`${BASE_URL}/data/getEntries`).pipe(fs.createWriteStream('./data/help_links.json'))
}

module.exports = {
    requestDataTask
};