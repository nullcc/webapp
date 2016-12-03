import React from 'react';
import classNames from 'classnames';
import {IndexLink} from 'react-router';

export default class NavBarItem extends React.Component {
    static propTypes = {
      label: React.PropTypes.string
    };

    render() {
        const {children, className, label, path, ...others} = this.props;
        const cls = classNames({
            weui_navbar_item: true
        }, className);

        return (
            <IndexLink to={path} activeClassName='weui_bar_item_on' className={cls} {...others}>
                {label ? label : children}
            </IndexLink>
        );
    }
}