"use strict";

import React from 'react';
import {AppActions} from '../../actions';
import "./stylesheets/me.css"

export default class Me extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        window.tab = 3;
        AppActions.updateTab();
    };

    componentWillUnmount() {

    };

    onChange(){

    }

    render() {
        return (
            <div className="me">
                我
            </div>
        );
    }
};
