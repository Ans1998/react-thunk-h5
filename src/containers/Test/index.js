import React, {Component} from 'react'
import './index.css'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import {actions as testActions, getTestData} from "../../redux/modules/ui/test";

class Test extends  Component{
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    // 挂载函数
    componentWillMount() {
    }
    render() {
        return (
            <div>
                测试页面
                <div onClick={this.Test}>
                    点击测试网络请求
                </div>
            </div>
        )
    }
    Test = () => {
        this.props.testActions.request()
    };
    // 组件加载完
    componentDidMount() {
        console.log(this.props)
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染前
    componentWillUpdate() {
        console.log(this.props)
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染后
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    // 组件卸载
    componentWillUnmount() {
    }
}

const mapStateToProps = (state, props) => {
    return {
        testData: getTestData(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        testActions: bindActionCreators(testActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Test)
// export default Test
