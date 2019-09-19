import React, {Component} from 'react'
import './index.css'

import { Flex, WhiteSpace } from 'antd-mobile';

class Nav extends  Component{
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
                <WhiteSpace size="md" style={{backgroundColor: '#efeff4'}}></WhiteSpace>
                <Flex style={{textAlign: 'center', padding: '.5rem 0'}}>
                    <Flex.Item>
                        <div className='index_nav_img'>
                            <img src="https://app.dev.9kbs.com/h5/static/img/home/drinking_water.png" alt=""/>
                        </div>
                        <div style={{paddingTop: '0.1rem', fontSize: '1rem',color: 'gray'}}>
                            <span>饮水</span>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className='index_nav_img'>
                            <img src="https://app.dev.9kbs.com/h5/static/img/home/drinking_water.png" alt=""/>
                        </div>
                        <div style={{paddingTop: '0.1rem', fontSize: '1rem',color: 'gray'}}>
                            <span>洗衣</span>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className='index_nav_img'>
                            <img src="https://app.dev.9kbs.com/h5/static/img/home/drinking_water.png" alt=""/>
                        </div>
                        <div style={{paddingTop: '0.1rem', fontSize: '1rem',color: 'gray'}}>
                            <span>洗浴</span>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className='index_nav_img'>
                            <img src="https://app.dev.9kbs.com/h5/static/img/home/drinking_water.png" alt=""/>
                        </div>
                        <div style={{paddingTop: '0.1rem', fontSize: '1rem',color: 'gray'}}>
                            <span>电吹风</span>
                        </div>
                    </Flex.Item>
                    <Flex.Item>
                        <div className='index_nav_img'>
                            <img src="https://app.dev.9kbs.com/h5/static/img/home/drinking_water.png" alt=""/>
                        </div>
                        <div style={{paddingTop: '0.1rem', fontSize: '1rem',color: 'gray'}}>
                            <span>充值</span>
                        </div>
                    </Flex.Item>
                </Flex>
                <WhiteSpace size="md" style={{backgroundColor: '#efeff4'}}></WhiteSpace>
            </div>
        )
    }
    // 组件加载完
    componentDidMount() {
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染前
    // componentWillUpdate() {
    // }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    // 组件卸载
    componentWillUnmount() {
    }
}
export default Nav
