var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppActionConstants = require('../constants/actionConstants').App;
var AppEventConstants = require('../constants/eventConstants').App;
var assign = require('object-assign');

// 当前tab序号
var _tab = 0;

// 授权状态
var _auth = true;

// 浏览器可见区域宽度
const _containerWidth = window.innerWidth;

// 浏览器可见区域高度
const _containerHeight = window.innerHeight;

// tab高度
const _tabHeight = 55;

// 页面高度(不算tab)
const _pageHeight = _containerHeight - _tabHeight;

var AppStore = assign({}, EventEmitter.prototype, {

    /**
     * 获取tab
     */
    getTab: function(){
        return _tab;
    },

    /**
     * 获取授权状态
     */
    getAuth: function(){
        return _auth;
    },

    /**
     * 获取浏览器可见区域宽度
     */
    getContainerWidth: function(){
        return _containerWidth;
    },

    /**
     * 获取浏览器可见区域高度
     */
    getContainerHeight: function(){
        return _containerHeight;
    },

    /**
     * 获取tab高度
     */
    getTabHeight: function(){
        return _tabHeight;
    },

    /**
     * 获取页面高度(不算tab)
     */
    getPageHeight: function(){
        return _pageHeight;
    },

    emitChange: function() {
        this.emit(AppEventConstants.APP_CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(AppEventConstants.APP_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(AppEventConstants.APP_CHANGE_EVENT, callback);
    }
});

/**
 * 注册事件回调
 */
AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppActionConstants.GET_TAB:
            _tab = action.payload.data;
            AppStore.emitChange();
            break;
        case AppActionConstants.AUTH:
            _auth = action.payload.data.isAuth;
            AppStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = AppStore;
