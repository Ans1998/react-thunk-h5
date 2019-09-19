import React, {Component} from 'react'
import './index.css'

import {bindActionCreators} from 'redux'

import {connect} from 'react-redux'

import {Flex, Icon, Grid} from 'antd-mobile'

import {actions as myActions, getMyInfo} from "../../../../redux/modules/ui/my";

class My extends  Component{
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
        const {myInfo} = this.props;
        let menu = [];
        if (myInfo && 'menu' in myInfo) {
            menu = myInfo.menu[0].son
        }
        return (
            <div className="my_content">
                <div className="my_head_content">
                    <div>
                        <img style={{width: '12.5rem', height: '12.5rem'}} src={myInfo.avatar} alt=""/>
                    </div>
                    <div>
                        <span>React 库</span>
                        <span>v1.0</span>
                    </div>
                    <div>
                        {myInfo.username}
                    </div>
                </div>

                <Flex className="my_middle_content">
                    <Flex.Item className="my_m_left">
                        <div>
                            {myInfo.cardnum}
                        </div>
                        <div>
                            卡数
                        </div>
                    </Flex.Item>
                    <Flex.Item className="my_m_middle">
                        <div>
                            {myInfo.shop_balance}
                        </div>
                        <div>
                            项目余额
                        </div>
                    </Flex.Item>
                    <Flex.Item className="my_m_right">
                        <div>
                            {myInfo.platform_balance}
                        </div>
                        <div>
                            平台余额
                        </div>
                    </Flex.Item>
                </Flex>

                <div className="my_bottom_content">
                    <Flex className="my_b_li_content">
                    {
                        menu.map((item, key) => {
                            return (
                                <Flex.Item key={key} className="my_b_li">
                                    <div>
                                        <img style={{width: '3.5rem', height: '3.5rem'}} src={item.icon_url} alt=""/>
                                    </div>
                                    <div style={{marginTop: '.5rem'}}>
                                        {item.name}
                                    </div>
                                </Flex.Item>
                            )
                        })
                    }
                    </Flex>
                </div>
            </div>
        )
    }
    // 组件加载完
    componentDidMount() {
        this.props.myActions.request()
        // console.log(this.props)
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染前
    componentWillUpdate() {
        // console.log(this.props)
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染后
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.myInfo)
    }

    // 组件卸载
    componentWillUnmount() {
    }
}

const mapStateToProps = (state, props) => {
    return {
        myInfo: getMyInfo(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        myActions: bindActionCreators(myActions, dispatch)
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(My)
// export default Test
