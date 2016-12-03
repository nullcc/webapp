"use strict";

/**
 * 遮罩层组件
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/mask.css';

import {Mask} from 'react-weui';

export default class MyMask extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        var clientWidth = document.getElementById('app').clientWidth;
        var clientHeight = document.getElementById('app').clientHeight;
        var show = this.props.show;
        var html = this.props.html;

        if (show){
            return (
                <div>
                    <Mask />
                    <div className="mask-info">
                        {html}
                    </div>
                </div>
            );
        }
        return <div></div>;
    }
}
