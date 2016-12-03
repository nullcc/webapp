var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var MainActionConstants = require('../constants/actionConstants').Main;
var MainEventConstants = require('../constants/eventConstants').Main;
var assign = require('object-assign');

var _tags = [];

var _tips = {};

var _selections = {};

var _currentTagIndex = -1;

var MainStore = assign({}, EventEmitter.prototype, {

    getTags: function(){
        return _tags;
    },

    getSelections: function(){
        return _selections.list;
    },

    /**
     * 获取贴士列表
     */
    getTips: function(tagId){
        if (_tips[tagId]){
            return _tips[tagId].list;
        }
        return [];
    },

    getTipsLength: function(tagId){
        if (_tips[tagId]){
            return _tips[tagId].list.length;
        }
        return 0;
    },

    getSelectionLength: function(){
        if (_selections.list){
            return _selections.list.length;
        }
        return 0;
    },

    getHasMore: function(tagId){
        if (!tagId){  // 无tagId为精选
            return _selections.hasMore;
        }
        if (_tips[tagId]){
            return _tips[tagId].hasMore;
        }
        return false;
    },

    getCurrentTagIndex:function(){
        return _currentTagIndex;
    },

    emitChange: function() {
        this.emit(MainEventConstants.MAIN_CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(MainEventConstants.MAIN_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(MainEventConstants.MAIN_CHANGE_EVENT, callback);
    }
});

/**
 * 注册事件回调
 */
AppDispatcher.register(function(action) {
    switch(action.type) {
        case MainActionConstants.GET_TAGS:
            if (!action.error) {
                var arr = [];
                if (action.payload.data){
                    action.payload.data.forEach(function(tag, index){
                        if (tag.name !== '人群'){
                            arr.push(tag);
                        }
                    });
                }
                _tags = [{name:'精选'}].concat(arr);
                MainStore.emitChange();
            }
            break;
        case MainActionConstants.GET_TIPS:
            if (!action.error) {
                var tagId = action.payload.tagId;
                var hasMore = action.payload.hasMore;
                var isRefresh = action.payload.isRefresh;
                var tips = action.payload.data;
                if (!_tips[tagId]){
                    _tips[tagId] = {};
                }
                _tips[tagId].hasMore = hasMore;
                if (isRefresh){
                    _tips[tagId].list = tips;
                }
                else{
                    _tips[tagId].list = _tips[tagId].list.concat(tips);
                }
                MainStore.emitChange();
            }
            break;
        case MainActionConstants.GET_SELECTIONS:
            if (!action.error) {
                var selections = action.payload.data;
                var hasMore = action.payload.hasMore;
                var isRefresh = action.payload.isRefresh;
                _selections.hasMore = hasMore;
                if (isRefresh){
                    _selections.list = selections;
                }
                else{
                    _selections.list = _selections.list.concat(selections);
                }
                MainStore.emitChange();
            }
            break;
        case MainActionConstants.SET_TAG_INDEX:
            _currentTagIndex = action.payload.data;
            MainStore.emitChange();
            break;
        case MainActionConstants.UPDATE:
            MainStore.emitChange();
            break;
        default:
        // no op
    }
});

module.exports = MainStore;
