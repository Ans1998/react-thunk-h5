import React, {Component} from 'react'
import './index.css'

import { Flex, SearchBar } from 'antd-mobile';

class Head extends  Component{
    // 挂载函数
    componentWillMount() {
    }
    render() {
        const {searchInput, onSearchButton, onSearchChange, onSearchClear} = this.props
        return (
            <div>
                <Flex style={{backgroundColor: '#efeff4'}}>
                    <Flex.Item>
                        <SearchBar value={searchInput} defaultValue="" onChange={onSearchChange}
                                   onSubmit={onSearchButton} onCancel={onSearchButton}
                                   onClear={onSearchClear} cancelText="搜索"
                                   placeholder="请输入设备编号或设备所在地址" ></SearchBar>
                    </Flex.Item>
                    <div style={{width: '2.5rem', textAlign: 'center'}}>
                        <img style={{width: '1.7rem', height: '1.7rem'}}
                             src="https://app.dev.9kbs.com/h5/static/img/home/scan.png" alt=""/>
                    </div>
                </Flex>
            </div>
        )
    }
    // 组件加载完
    componentDidMount() {
    }
    // 在组件接收到了新的 props 或者 state 即将进行重新渲染前
    componentWillUpdate() {
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    // 组件卸载
    componentWillUnmount() {
    }
}
export default Head
