import React from 'react';
import classNames from 'classnames';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';
import {IndexLink} from 'react-router';
//import RedPoint from '../../commons/redPoint/redPoint';

export default class TabBarItem extends React.Component {
    static propTypes = {
        icon: React.PropTypes.any,
        label: React.PropTypes.string,
        active: React.PropTypes.bool
    };

    static defaultProps = {
        icon: false,
        label: '',
        active: false
    };

    render() {
        const {children, className, icon, iconHl, active, label, path, ...others} = this.props;
        const cls = classNames({
            weui_tabbar_item: true,
            weui_bar_item_on: active
        }, className);

        if(icon || label){
            return (
                <IndexLink to={path} activeClassName='weui_bar_item_on' className={cls} {...others}>
                    {active? <TabBarIcon>{iconHl}</TabBarIcon> : <TabBarIcon>{icon}</TabBarIcon>}
                    {label ? <TabBarLabel>{label}</TabBarLabel> : false}
                </IndexLink>
            )
        }else{
            return (
                <IndexLink to={path} activeClassName='weui_bar_item_on' className={cls} {...others}>
                    {children}
                </IndexLink>
            );
        }
    }
}
