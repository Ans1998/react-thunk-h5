import React, {Component} from 'react'
import './index.css'

import { Carousel } from 'antd-mobile';

class Silde extends  Component{
    // 构造函数
    constructor(props) {
        super(props);
    }
    // 挂载函数
    componentWillMount() {
    }
    render() {
        const {data} = this.props;
        return (
            <div>
                <Carousel
                    className="home_slide_content"
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {data.map((item, key) => (
                        <a
                            key={key}
                            href={item.linkurl}
                            className='index_head_Carousel'
                            style={{ display: 'inline-block', width: '100%', height: '11rem' }}
                        >
                            <img
                                src={item.picurl}
                                alt=""
                                style={{ width: '100%',height: '11rem', verticalAlign: 'top' }}
                            />
                        </a>
                    ))}
                </Carousel>
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
export default Silde
