import React, {Component} from 'react'
import './index.css'

// import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import { TabBar } from 'antd-mobile';

import Index from './containers/Index'
import More from './containers/More'
import My from './containers/My'
import Recharge from './containers/Recharge'

class Home extends  Component{
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index'
        };
    }
    // 挂载函数
    componentWillMount() {
    }
    render() {
        return (
            <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="index"
                        icon={{
                            uri: 'https://app.dev.9kbs.com/h5/static/img/public/navigation/home.png'
                        }}
                        selectedIcon={{
                            uri: 'https://app.dev.9kbs.com/h5/static/img/public/navigation/click_home.png'
                        }}
                        selected={this.state.selectedTab === 'index'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'index',
                            });
                        }}
                    >
                        <div style={{backgroundColor: 'white', height: '100%'}}>
                            {this.renderContent('Index')}
                        </div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri: 'https://app.dev.9kbs.com/h5/static/img/public/navigation/recharge.png'
                        }}
                        selectedIcon={ {
                            uri: 'https://app.dev.9kbs.com/h5/static/img/public/navigation/click_recharge.png'
                        }}
                        title="充值"
                        key="recharge"
                        selected={this.state.selectedTab === 'recharge'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'recharge',
                            });
                        }}
                    >
                        <div style={{backgroundColor: 'white', height: '100%'}}>
                            {this.renderContent('Recharge')}
                        </div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri: 'https://app.dev.9kbs.com/h5/static/img/public/navigation/more.png'
                        }}
                        selectedIcon={{
                            uri: 'https://app.dev.9kbs.com/h5/static/img/public/navigation/click_more.png'
                        }}
                        title="更多"
                        key="more"
                        selected={this.state.selectedTab === 'more'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'more',
                            });
                        }}
                    >
                        <div style={{backgroundColor: 'white', height: '100%'}}>
                            {this.renderContent('More')}
                        </div>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{
                            uri: 'https://app.dev.9kbs.com/h5/static/img/public/navigation/my.png'
                        }}
                        selectedIcon={{
                            uri: 'https://app.dev.9kbs.com/h5/static/img/public/navigation/click_my.png'
                        }}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'my'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'my',
                            });
                        }}
                    >
                        <div style={{backgroundColor: 'white', height: '100%'}}>
                            {this.renderContent('My')}
                        </div>

                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }

    renderContent(componentName) {
        switch (componentName) {
            case 'Index':
                return <Index></Index> ;
            case 'Recharge':
                return <Recharge></Recharge>;
            case 'My':
                return <My></My>;
            case 'More':
                return <More></More>;
            default:
                return <Index></Index>;
        }
    }

    // 组件加载完
    componentDidMount() {
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染前
    componentWillUpdate() {
    }

    // 组件卸载
    componentWillUnmount() {
    }
}

const mapStateToProps = (state, props) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Test
