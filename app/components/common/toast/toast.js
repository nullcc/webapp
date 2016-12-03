"use strict";

/**
 * toast
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './styles/toast.css';

export default class Toast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        var clientWidth = document.getElementById('app').clientWidth;
        var marginLeft = clientWidth/4;
        return (
            <div>
                {
                    this.props.show ?
                        <div className="toast" style={{'width': clientWidth/2+'px','marginLeft': marginLeft+'px'}}>
                            {this.props.content}
                        </div>
                        :
                        ''
                }
            </div>
        );
    }
}
