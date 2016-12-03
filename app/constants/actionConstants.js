// actions常量

var keyMirror = require('keymirror');

module.exports = {};

/**
 * Container Actions
 */
module.exports.Container = keyMirror({
    SHOW_LOADING: null, // 显示loading
    HIDE_LOADING: null, // 隐藏loading
    SHOW_TOAST: null,   // 显示toast
    HIDE_TOAST: null,   // 隐藏toast
    SHOW_ALERT: null,   // 显示alert
    HIDE_ALERT: null,   // 隐藏alert
    SHOW_CONFIRM: null, // 显示confirm
    HIDE_CONFIRM: null, // 隐藏confirm
    SHOW_MASK: null,    // 显示遮罩层
    HIDE_MASK: null     // 隐藏遮罩层
});

/**
 * App Actions
 */
module.exports.App = keyMirror({
    GET_TAB: null, // 获取当前tab序号
    AUTH: null     // app授权
});