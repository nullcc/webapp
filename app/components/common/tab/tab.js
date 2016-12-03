import React from 'react';
import classNames from 'classnames';
import NavBarItem from './navbar_item';
import TabBody from './tab_body';
import TabBarItem from './tabbar_item';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';
import Bar from './bar';

export default class Tab extends React.Component {

    parseBar(children) {
        const headers = [];
        const contents = [];
        React.Children.map(children, child => {
            if(child.type === NavBarItem || child.type === TabBarItem){
                headers.push(child);
            }else if(child.type === TabBody){
                contents.push(child);
            }
        });
        return {headers, contents};
    }

    render() {
        const {children, className, type, ...others} = this.props;
        const cls = classNames({
            weui_tab: true
        }, className);
        const {headers, contents} = this.parseBar(children);
        return (<div className={cls}>
            {type === 'tabbar' ? contents : ''}
            <Bar type={type}>
                {headers}
            </Bar>
            {type === 'navbar' ? contents : ''}
        </div>);
    }
}