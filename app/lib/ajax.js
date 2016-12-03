import agent from 'superagent';
import BaseViewActions from './actions/baseViewActions';
//import AppActions from './actions/appActions';
import {Host} from './constants/apiConstants';

let request = function (method, path, data, cb) {

    setTimeout(function(){ // 显示loading
        BaseViewActions.showLoading();
    }, 1);

    var url = Host + path;
    let header = {
        'Content-Type': 'application/json'
    };

    let callback = function (err, res) {

        setTimeout(function(){ // 隐藏loading
            BaseViewActions.hideLoading();
        }, 1);

        if (err) {
            console.error(err);
            return cb(err);
        }

        if (res.body){
            switch (res.body.result) {
                case 0: // 系统级错误,不显示错误信息
                    console.error('server internal error');
                    return cb(new Error('server internal error'));
                case 1: // 正常返回
                    return cb(null, res.body.message);
                case 2: // 用户级别错误,显示错误信息
                    BaseViewActions.showToast(res.body.message);
                    return cb(new Error(res.body.message), res.body.message);
                default:
                    return cb(new Error('server internal error'));
            }
        }
    };
    switch (method) {
        case 'get':
            agent.get(url).set(header).query(data).end(callback);
            break;
        case 'post':
            agent.post(url).set(header).send(data).end(callback);
            break;
        default:
            agent.get(url).set(header).query(data).end(callback);
    }
};

export default request;
