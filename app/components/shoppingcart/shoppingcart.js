"use strict";

import React from 'react';
import {AppActions} from '../../actions';
import "./stylesheets/shoppingcart.css"

export default class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        window.tab = 1;
        AppActions.updateTab();
    };

    componentWillUnmount() {

    };

    onChange(){

    }

    render() {
        return (
            <div className="shoppingcart">
                购物车
            </div>
        );
    }
};
