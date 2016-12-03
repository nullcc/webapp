"use strict";

import React from 'react';
import {AppActions} from '../../actions';
import "./stylesheets/main.css"

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        window.tab = 0;
        AppActions.updateTab();
    };

    componentWillUnmount() {

    };

    onChange(){

    }

    render() {
        return (
            <div className="main">
                首页
            </div>
        );
    }
};
