// api

module.exports = {};

/**
 * Main Api
 */
module.exports.Main = {
    getTags: '/toolkit/tags',                 // 获取一级标签
    getTips: '/toolkit/tags',                 // 获取贴士列表
    getSelections: '/toolkit/selection/list', // 获取每日精选列表
    getTip: '/toolkit/webView/tips/',         // 获取贴士详情
    getArticle: '/toolkit/webView/articles/'  // 获取文章详情
};

var Host = 'http://www.meiquapp.com:8000';
//var Host = 'http://123.57.4.169:8000';
module.exports.Host = Host;                  // host地址
