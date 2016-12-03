"use strict";

import React from 'react';
import {AppActions} from '../../actions';
import "./stylesheets/orders.css"

export default class Orders extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        window.tab = 2;
        AppActions.updateTab();
    };

    componentWillUnmount() {

    };

    onChange(){

    }

    render() {
        return (
            <div className="orders">
                订单
            </div>
        );
    }
};
