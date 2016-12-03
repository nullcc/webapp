var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var ContainerActionConstants = require('../constants/actionConstants').Container;
var ContainerEventConstants = require('../constants/eventConstants').Container;
var assign = require('object-assign');

// loading框状态
var _showLoading = false;

// 提示框状态
var _showToast = false;

// 提示框状态信息
var _toastMessage= '';

// alert框状态
var _showAlert = false;

// alert框title
var _alertTitle = '';

// alert框content
var _alertContent = '';

// alert框确认按钮回调
var _onAlertOK = null;

// confirm框状态
var _showConfirm = false;

// confirm框title
var _confirmTitle = '';

// confirm框取消按钮回调
var _onConfirmCancel = null;

// confirm框确认按钮回调
var _onConfirmOK = null;

// 遮罩层状态
var _showMask = false;

// 遮罩层html
var _maskHtml = '';

var BaseStore = assign({}, EventEmitter.prototype, {

    /**
     * 获取正在加载状态
     */
    getShowLoading: function(){
        return _showLoading;
    },

    /**
     * 获取消息提示框状态
     */
    getShowToast: function(){
        return _showToast;
    },

    /**
     * 获取消息提示框消息
     */
    getToastMessage: function(){
        return _toastMessage;
    },

    /**
     * 获取alert框状态
     */
    getShowAlert: function(){
        return _showAlert;
    },

    /**
     * 获取alert框title
     */
    getAlertTitle: function(){
        return _alertTitle;
    },

    /**
     * 获取alert框content
     */
    getAlertContent: function(){
        return _alertContent;
    },

    /**
     * 获取alert框确认按钮回调
     */
    getOnAlertOK: function(){
        return _onAlertOK;
    },

    /**
     * 获取confirm框状态
     */
    getShowConfirm: function(){
        return _showConfirm;
    },

    /**
     * 获取confirm框title
     */
    getConfirmTitle: function(){
        return _confirmTitle;
    },

    /**
     * 获取confirm框取消按钮回调
     */
    getOnConfirmCancel: function(){
        return _onConfirmCancel;
    },

    /**
     * 获取confirm框确认按钮回调
     */
    getOnConfirmOK: function(){
        return _onConfirmOK;
    },

    /**
     * 获取遮罩层状态
     */
    getShowMask: function(){
        return _showMask;
    },

    /**
     * 获取遮罩层html
     */
    getMaskHtml: function(){
        return _maskHtml;
    },

    emitChange: function() {
        this.emit(ContainerEventConstants.CONTAINER_CHANGE_EVENT);
    },

    addChangeListener: function(callback) {
        this.on(ContainerEventConstants.CONTAINER_CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(ContainerEventConstants.CONTAINER_CHANGE_EVENT, callback);
    }
});

/**
 * 注册事件回调
 */
AppDispatcher.register(function(action) {
    switch(action.type) {
        case ContainerActionConstants.SHOW_LOADING:
            _showLoading = true;
            BaseStore.emitChange();
            break;

        case ContainerActionConstants.HIDE_LOADING:
            _showLoading = false;
            BaseStore.emitChange();
            break;

        case ContainerActionConstants.SHOW_TOAST:
            _showToast = true;
            _toastMessage = action.payload.data;
            BaseStore.emitChange();
            break;

        case ContainerActionConstants.HIDE_TOAST:
            _showToast = false;
            break;

        case ContainerActionConstants.SHOW_ALERT:
            _showAlert = true;
            _alertTitle = action.payload.data.title;
            _alertContent = action.payload.data.content;
            _onAlertOK = action.payload.data.onOK;
            BaseStore.emitChange();
            break;

        case ContainerActionConstants.HIDE_ALERT:
            _showAlert = false;
            _alertTitle = '';
            _alertContent = '';
            _onAlertOK = null;
            break;

        case ContainerActionConstants.SHOW_CONFIRM:
            _showConfirm = true;
            _confirmTitle = action.payload.data.title;
            _onConfirmCancel = action.payload.data.onCancel;
            _onConfirmOK = action.payload.data.onOK;
            BaseStore.emitChange();
            break;

        case ContainerActionConstants.HIDE_CONFIRM:
            _confirmTitle = '';
            _onConfirmCancel = null;
            _onConfirmOK = null;
            _showConfirm = false;
            break;

        case ContainerActionConstants.SHOW_MASK:
            _showMask = true;
            _maskHtml = action.payload.data.html;
            BaseStore.emitChange();
            break;

        case ContainerActionConstants.HIDE_MASK:
            _showMask = false;
            _maskHtml = '';
            BaseStore.emitChange();
            break;

        default:
        // no op
    }
});

module.exports = BaseStore;
