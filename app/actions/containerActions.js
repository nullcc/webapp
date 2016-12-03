var AppDispatcher = require('../dispatcher/appDispatcher');
var ContainerConstants = require('../constants/actionConstants').Container;

var ContainerActions = {

    /**
     * 显示loading框
     */
    showLoading: function() {
        var action = {
            type: ContainerConstants.SHOW_LOADING
        };
        action.payload = {data: {}};
        AppDispatcher.dispatch(action);
    },

    /**
     * 隐藏loading框
     */
    hideLoading: function() {
        var action = {
            type: ContainerConstants.HIDE_LOADING
        };
        action.payload = {data: {}};
        AppDispatcher.dispatch(action);
    },

    /**
     * 显示toast
     */
    showToast: function(message) {
        var action = {
            type: ContainerConstants.SHOW_TOAST
        };
        action.payload = {data: message};
        AppDispatcher.dispatch(action);
    },

    /**
     * 隐藏toast
     */
    hideToast: function() {
        var action = {
            type: ContainerConstants.HIDE_TOAST
        };
        action.payload = {data: {}};
        AppDispatcher.dispatch(action);
    },

    /**
     * 显示alert框
     */
    showAlert: function(title, content, onOK) {
        var action = {
            type: ContainerConstants.SHOW_ALERT
        };
        action.payload = {data: {
            title: title,
            content: content,
            onOK: onOK
        }};
        AppDispatcher.dispatch(action);
    },

    /**
     * 隐藏alert框
     */
    hideAlert: function() {
        var action = {
            type: ContainerConstants.HIDE_ALERT
        };
        action.payload = {data: {}};
        AppDispatcher.dispatch(action);
    },

    /**
     * 显示confirm框
     */
    showConfirm: function(title, onCancel, onOK) {
        var action = {
            type: ContainerConstants.SHOW_CONFIRM
        };
        action.payload = {data: {
            title: title,
            onCancel: onCancel,
            onOK: onOK
        }};
        AppDispatcher.dispatch(action);
    },

    /**
     * 隐藏confirm框
     */
    hideConfirm: function() {
        var action = {
            type: ContainerConstants.HIDE_CONFIRM
        };
        action.payload = {data: {}};
        AppDispatcher.dispatch(action);
    },

    /**
     * 显示遮罩层
     */
    showMask: function(html) {
        var action = {
            type: ContainerConstants.SHOW_MASK
        };
        action.payload = {data: {
            html: html
        }};
        AppDispatcher.dispatch(action);
    },

    /**
     * 隐藏遮罩层
     */
    hideMask: function() {
        var action = {
            type: ContainerConstants.HIDE_MASK
        };
        action.payload = {data: {}};
        AppDispatcher.dispatch(action);
    }

};

module.exports = ContainerActions;
