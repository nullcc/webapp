var AppDispatcher = require('../dispatcher/appDispatcher');
var AppActionConstants = require('../constants/actionConstants').App;

var AppActions = {

    /**
     * 更新当前tab序号
     */
    updateTab: function() {
        var action = {
            type: AppActionConstants.GET_TAB
        };
        action.payload = {data: window.tab};
        AppDispatcher.dispatch(action);
    },

    /**
     * 进行用户授权
     */
    auth: function(isAuth) {
        var action = {
            type: AppActionConstants.AUTH
        };
        action.payload = {data: {isAuth: isAuth}};
        AppDispatcher.dispatch(action);
    }
};

module.exports = AppActions;
