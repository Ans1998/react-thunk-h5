import React, {Component} from 'react'
import './index.css'

// import {bindActionCreators} from 'redux'
//
// import {connect} from 'react-redux'

import {Flex} from 'antd-mobile'

class Recharge extends  Component{
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
            <div className="recharge_content">
                <Flex style={{margin: '0 .5rem', borderRadius: '1rem', backgroundColor: '#efeff4', height: '6rem'}}>
                    <div className="recharge_li_left" style={{backgroundColor: 'red'}}>
                        <div className='recharge_li_left_title'>
                            绑卡充值
                        </div>
                    </div>
                    <div className="recharge_li_right">
                        <div className="recharge_li_right_top">绑定卡，随时随地充值</div>
                        <div className="recharge_li_right_bottom" style={{backgroundColor: 'red'}}>立即充值</div>
                    </div>
                </Flex>

                <Flex style={{margin: '.5rem .5rem', borderRadius: '1rem', backgroundColor: '#efeff4', height: '6rem'}}>
                    <div className="recharge_li_left" style={{backgroundColor: '#188ffe'}}>
                        <div className='recharge_li_left_title'>
                            反扫机领款
                        </div>
                    </div>
                    <div className="recharge_li_right">
                        <div className="recharge_li_right_top">无需绑定卡，扫描设备直接支付领款</div>
                        <div className="recharge_li_right_bottom" style={{backgroundColor: '#188ffe'}}>立即领款</div>
                    </div>
                </Flex>

                <Flex style={{margin: '0 .5rem', borderRadius: '1rem', backgroundColor: '#efeff4', height: '6rem'}}>
                    <div className="recharge_li_left" style={{backgroundColor: '#cb18fe'}}>
                        <div className='recharge_li_left_title'>
                            余额充值
                        </div>
                    </div>
                    <div className="recharge_li_right">
                        <div className="recharge_li_right_top">平台钱包充值，专项钱包充值</div>
                        <div className="recharge_li_right_bottom" style={{backgroundColor: '#cb18fe'}}>去充值</div>
                    </div>
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

// const mapStateToProps = (state, props) => {
//     return {
//     }
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Recharge)
export default Recharge
