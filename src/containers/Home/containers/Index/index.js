import React, {Component} from 'react'
import './index.css'

import {actions as homeActions, getHomeSlide, getHomeCommonUseDevice} from '../../../../redux/modules/ui/home'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import Head from './components/Head'
import Slide from './components/Slide'
import Nav from './components/Nav'
import CommonUseDevice from './components/CommonUseDevice'

class Index extends  Component{
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }
    // 挂载函数
    componentWillMount() {
    }
    render() {
        const {homeSlide, homeCommonUseDevice} = this.props;
        return (
            <div>
                <Head searchInput={this.state.searchInput} onSearchButton={this.handleSearchButton} onSearchChange={this.handleSearchChange} onSearchClear={this.handleSearchClear}></Head>
                <Slide data={homeSlide}></Slide>
                <Nav></Nav>
                <CommonUseDevice data={homeCommonUseDevice}></CommonUseDevice>
            </div>
        )
    }
    // 文本框输入监听
    handleSearchChange = (e) => {
        this.setState({
            searchInput: e
        })
    };
    // 清空图标
    handleSearchClear = () => {
        console.log('清空图标');
        this.setState({
            searchInput: ''
        })
    };
    // 搜索
    handleSearchButton = () => {
        console.log('搜索', this.state.searchInput);
        console.log(this.props)
    };
    // 组件加载完
    componentDidMount() {
        this.props.homeActions.requestSlide();
        this.props.homeActions.requestCommonUseDevice()
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染前
    componentWillUpdate() {
        console.log('componentWillUpdate', this.props)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // 不加 async await 可以直接获取
        console.log('componentDidUpdate', this.props)
    }

    // 组件卸载
    componentWillUnmount() {
    }
}

const mapStateToProps = (state, props) => {
    return {
        homeCommonUseDevice: getHomeCommonUseDevice(state),
        homeSlide: getHomeSlide(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        homeActions: bindActionCreators(homeActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Index)
// export default Index
