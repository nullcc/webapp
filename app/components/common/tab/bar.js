import React from 'react';
import classNames from 'classnames';

export default class Bar extends React.Component {
    render() {

        const {children, className, type, ...others} = this.props;
        const typeMap = {
            navbar: {
                weui_navbar: true
            },
            tabbar: {
                weui_tabbar: true
            }
        };
        const cls = classNames(typeMap[type], className);

        return (
            <div className={cls} {...others}>
                {children}
            </div>
        );
    }
}