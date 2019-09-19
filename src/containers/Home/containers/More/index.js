import React, {Component} from 'react'
import './index.css'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import {Flex} from 'antd-mobile'

class More extends  Component{
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
            <div className="more_content">
                <Flex style={{paddingLeft: '.5rem', paddingRight: '.5rem'}}>
                    <Flex.Item className="more_li_left">
                        <img src="https://app.dev.9kbs.com/h5/static/img/public/navigation/recharge.png" alt=""/>
                        <span>挂失</span>
                    </Flex.Item>
                    <Flex.Item className="more_li_right">
                        <img src="https://app.dev.9kbs.com/h5/static/img/public/navigation/click_recharge.png" alt=""/>
                        <span>解挂</span>
                    </Flex.Item>
                </Flex>
            </div>
        )
    }
    // 组件加载完
    componentDidMount() {
        console.log(this.props)
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染前
    componentWillUpdate() {
        console.log(this.props)
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
export default connect(mapStateToProps, mapDispatchToProps)(More)
// export default Test
