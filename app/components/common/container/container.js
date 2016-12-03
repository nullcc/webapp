"use strict";

/**
 * 最底层的空白页,所有业务页面的公用容器
 * 负责显示loading,toast,alert,confirm
 *
 */

import React from 'react';
import {ContainerActions} from '../../../actions';
import {ContainerStore, AppStore} from '../../../stores';
import './style/container.css';
//import '../helperCss/helper.css';
import MyToast from '../toast/toast';
import Mask from '../../common/mask/mask';

import {
    Toast,
    Dialog,
} from 'react-weui';

const {Alert, Confirm} = Dialog;

/**
 * 获取loading状态
 */
function _getShowLoading() {
    return ContainerStore.getShowLoading();
}

/**
 * 获取toast状态
 */
function _getShowToast() {
    return ContainerStore.getShowToast();
}

/**
 * 获取toast message
 */
function _getToastMessage() {
    return ContainerStore.getToastMessage();
}

/**
 * 获取alert状态
 */
function _getShowAlert() {
    return ContainerStore.getShowAlert();
}

/**
 * 获取alert title
 */
function _getAlertTitle() {
    return ContainerStore.getAlertTitle();
}

/**
 * 获取alert content
 */
function _getAlertContent() {
    return ContainerStore.getAlertContent();
}

/**
 * 获取alert OK按钮回调
 */
function _getOnAlertOK() {
    return ContainerStore.getOnAlertOK();
}

/**
 * 获取confirm状态
 */
function _getShowConfirm() {
    return ContainerStore.getShowConfirm();
}

/**
 * 获取confirm title
 */
function _getConfirmTitle() {
    return ContainerStore.getConfirmTitle();
}

/**
 * 获取confirm 取消按钮回调
 */
function _getOnConfirmCancel() {
    return ContainerStore.getOnConfirmCancel();
}

/**
 * 获取confirm 确认按钮回调
 */
function _getOnConfirmOK() {
    return ContainerStore.getOnConfirmOK();
}

/**
 * 获取遮罩层状态
 */
function _getShowMask() {
    return ContainerStore.getShowMask();
}

/**
 * 获取遮罩层html
 */
function _getMaskHtml() {
    return ContainerStore.getMaskHtml();
}

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // loading框
            showLoading: false,

            // 信息提示框
            showToast: false,
            toastMessage: '',
            toastTimer: null,

            // alert框
            showAlert: false,
            alertTitle: '',
            alertContent: '',
            alert: {
                buttons: [
                    {
                        label: '确定',
                        onClick: this.hideAlert.bind(this)
                    }
                ]
            },

            // confirm框
            showConfirm: false,
            confirmTitle: '',
            confirm: {
                buttons: [
                    {
                        type: 'default',
                        label: '取消',
                        onClick: this.onConfirmCancel.bind(this)
                    },
                    {
                        type: 'primary',
                        label: '确认',
                        onClick: this.onConfirmOK.bind(this)
                    }
                ]
            },

            // 遮罩层
            showMask: false,
            maskHtml: ''
        };
        this._onChange = this._onChange.bind(this);
    };

    componentDidMount() {
        ContainerStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        this.state.toastTimer && clearTimeout(this.state.toastTimer);
        ContainerStore.removeChangeListener(this._onChange);
    };

    _onChange() {
        this.setState({
            showLoading: _getShowLoading(),
            toastMessage: _getToastMessage(),
            alertTitle: _getAlertTitle(),
            alertContent: _getAlertContent(),
            confirmTitle: _getConfirmTitle()
        });

        if(_getShowToast()){ // 判断是否需要显示toast
            this.showToast();
        }

        if(_getShowAlert()){ // 判断是否需要显示alert
            this.showAlert();
        }

        if(_getShowConfirm()){ // 判断是否需要显示confirm
            this.showConfirm();
        }

        if (_getShowMask()){ // 判断是否需要显示遮罩层
            this.showMask(_getMaskHtml());
        }
        else {
            this.hideMask();
        }
    };

    showToast() {
        this.setState({showToast: true});
        clearTimeout(this.state.toastTimer);
        this.state.toastTimer = setTimeout(()=> {
            ContainerActions.hideToast();
            this.setState({showToast: false});
        }, 2000);
    }

    showAlert() {
        this.setState({showAlert: true});
    };

    hideAlert() {
        var _onAlertOK = _getOnAlertOK();
        if (_onAlertOK !== null){
            _onAlertOK();
        }
        ContainerActions.hideAlert();
        this.setState({showAlert: false});
    };

    showConfirm() {
        this.setState({showConfirm: true});
    }

    hideConfirm() {
        ContainerActions.hideConfirm();
        this.setState({showConfirm: false});
    }

    onConfirmCancel(){
        var _onConfirmCancel = _getOnConfirmCancel();
        if (_onConfirmCancel !== null){
            _onConfirmCancel();
        }
        this.hideConfirm();
    }

    onConfirmOK(){
        var _onConfirmOK = _getOnConfirmOK();
        if (_onConfirmOK !== null){
            _onConfirmOK();
        }
        this.hideConfirm();
    }

    showMask(maskHtml) {
        console.log('show mask');
        this.setState({
            showMask: true,
            maskHtml: maskHtml
        });
    }

    hideMask() {
        this.setState({showMask: false});
    }

    render() {
        return (
            <div className="container" style={{'height': AppStore.getContainerHeight()}}>
                <Alert
                    title={this.state.alertTitle}
                    buttons={this.state.alert.buttons}
                    show={this.state.showAlert}
                >
                    {this.state.alertContent}
                </Alert>
                <Confirm
                    title={this.state.confirmTitle}
                    buttons={this.state.confirm.buttons}
                    show={this.state.showConfirm}
                >
                </Confirm>
                <Toast icon="loading" show={this.state.showLoading}>正在加载中...</Toast>
                <MyToast
                    show={this.state.showToast}
                    content={this.state.toastMessage}
                />

                <Mask
                    show={this.state.showMask}
                    html={this.state.maskHtml}
                />

                {this.props.children}
            </div>
        );
    }
};
