import React, {Component} from 'react'
import './index.css'

import { Flex, Carousel } from 'antd-mobile';

class CommonUseDevice extends  Component{
    // 构造函数
    constructor(props) {
        super(props);
        this.state = {
            slideColor: 'slide_purple'
        }
    }
    // 挂载函数
    componentWillMount() {
    }
    render() {
        const {data} = this.props;
        return (
            <div>
                <Flex style={{margin: '0.7rem 0'}} align='center' justify='center'>
                    <Flex.Item  style={{color: '#ffae00', textAlign: 'left', fontSize: '1.1rem',
                        fontWeight: '50rem', marginLeft: '0.3rem', marginRight: '0.3rem'}}>
                        常用设备
                    </Flex.Item>
                    <Flex.Item style={{textAlign: 'right'}}>
                    </Flex.Item>
                </Flex>

                <Carousel
                    className='common_carousel_content'
                    autoplay={false}
                    infinite
                    dots={false}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {data.map((val, key) => (
                        <div className='common_carousel' key={key}>

                            <Flex style={{padding: '.5rem 0.3rem'}}>
                                <Flex.Item className={this.colorChange(key, val)}  style={{textAlign: 'center', borderRadius: '1rem', height: '7rem'}}>
                                    <div style={{paddingTop: '1rem'}}>
                                        <img style={{width: '1.2rem', height: '1.2rem'}} src="https://app.dev.9kbs.com/h5/static/img/home/frequently_used/1.png" alt=""/>
                                    </div>
                                    <div style={{paddingTop: '.5rem'}}>
                                        设备编号
                                    </div>
                                    <div style={{paddingTop: '.2rem', fontSize: '0.8rem'}}>
                                        {val.device_code}
                                    </div>
                                </Flex.Item>
                                <Flex.Item className={this.colorChange(key, val)}  style={{textAlign: 'center', borderRadius: '1rem', height: '7rem'}}>
                                    <div style={{paddingTop: '1rem'}}>
                                        <img style={{width: '1rem', height: '1.2rem'}} src="https://app.dev.9kbs.com/h5/static/img/home/frequently_used/2.png" alt=""/>
                                    </div>
                                    <div  style={{paddingTop: '.5rem'}}>
                                        总消费
                                    </div>
                                    <div style={{paddingTop: '.2rem', fontSize: '0.8rem'}}>
                                        {val.consume_statistics}
                                    </div>
                                </Flex.Item>
                            </Flex>

                            <div style={{textAlign: 'center', padding: '.5rem 0'}}>
                                <img style={{width: '2rem'}} src={val.device_icon} alt=""/>
                            </div>

                            <div style={{textAlign: 'center', padding: '0 0 .5rem 0', fontSize: '1rem',color: 'gray'}}>
                                {val.device_name}
                            </div>

                            <Flex style={{padding: '.5rem 0.3rem'}}>
                                <Flex.Item className={this.colorChange(key,val)}  style={{textAlign: 'center',
                                    borderRadius: '1rem', height: '7rem'
                                }}>
                                    <div style={{paddingTop: '1rem'}}>
                                        <img style={{width: '1.2rem', height: '1.4rem'}}
                                             src="https://app.dev.9kbs.com/h5/static/img/home/frequently_used/3.png"
                                             alt=""/>
                                    </div>
                                    <div style={{paddingTop: '.5rem'}}>
                                        设备位置
                                    </div>
                                    <div style={{paddingTop: '.2rem', fontSize: '0.8rem'}}>
                                        {val.position_admin_info}
                                    </div>
                                </Flex.Item>
                                <Flex.Item className={this.colorChange(key, val)}  style={{textAlign: 'center', borderRadius: '1rem', height: '7rem'}}>
                                    <div style={{paddingTop: '1rem'}}>
                                        <img style={{width: '1.4rem', height: '1.3rem'}}
                                             src="https://app.dev.9kbs.com/h5/static/img/home/frequently_used/4.png"
                                             alt=""/>
                                    </div>
                                    <div style={{paddingTop: '.5rem'}}>
                                        最近使用
                                    </div>
                                    <div style={{paddingTop: '.2rem', fontSize: '0.8rem'}}>
                                        {val.last_used_time}
                                    </div>
                                </Flex.Item>
                            </Flex>

                        </div>
                    ))}
                </Carousel>

            </div>
        )
    }
    colorChange = (key, val) => {
        switch (key) {
            case 0:
                return 'slide_blue';
            case 1:
                return 'slide_purple';
            case 2:
                return 'slide_green';
            case 3:
                return 'slide_darkRed';
            case 4:
                return 'slide_blond'
        }
    };
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
export default CommonUseDevice
