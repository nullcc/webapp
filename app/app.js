import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute, IndexRedirect} from 'react-router';
import 'weui';
import config from '../config/config';

import {
    Container,
    TabX,
    Main,
    Shoppingcart,
    Orders,
    Me
} from './components';

//import {Host, Auth} from './constants/apiConstants';
import {AppActions} from './actions';
import {AppStore} from './stores';

const {Tab, TabBody, TabBarItem} = TabX;

function _getTab() {
    return AppStore.getTab();
}

//function _getAuth() {
//    return AppStore.getAuth();
//}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0
        };
        this._onChange = this._onChange.bind(this);
    };

    componentWillMount() {
        document.title = config.title; // 设置应用标题
        AppStore.addChangeListener(this._onChange);
    };

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    };

    _onChange() {
        this.setState({
            tab: _getTab()
        });
        //if(!_getAuth()){
        //    location.href = Host + Auth;
        //}
    };

    renderTabs() {
      var self = this;
      var tabs = [];
      config.tabs.forEach(function(tab, index){
        tabs.push(
          <TabBarItem onClick={e=>self.setState({tab: index})} active={self.state.tab == index} icon={<img src={tab.icon} />} iconHl={<img src={tab.iconhl} />} label={tab.name} path={'app/' + tab.path} />
        );
      });
      return tabs;
    };

    render() {
        return (
            <Tab type='tabbar' ref="tabbar">
                <TabBody style={{'height': AppStore.getPageHeight()}}>
                    {this.props.children}
                </TabBody>
                { this.renderTabs() }
            </Tab>
        );
    }
}

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path='/' component={Container}>

            /* 默认跳转到/main */
            <IndexRedirect to="/app" />

            /* 顶层4个tabs */
            <Route path='/app' component={App}>
                <IndexRoute component={Main}/>
                <Route path="shoppingcart" component={Shoppingcart}/>
                <Route path='orders' component={Orders}/>
                <Route path='me' component={Me}/>
            </Route>

        </Route>
    </Router>
), document.getElementById('app'));
