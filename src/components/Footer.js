import React, { Component } from 'react'
import '../sass/Footer.scss'
export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container juzhong">
                        <div className="row">
                            <div className="col-sm-4 col-md-2">
                                <p>新手入门</p>
                                <ul className="list-unstyled">
                                    <li>骑行方式</li>
                                    <li>骑行线路</li>
                                    <li>骑行选择</li>
                                    <li>常见问题</li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-2">
                                <p>关于我们</p>
                                <ul className="list-unstyled">
                                    <li>公司简介</li>
                                    <li>个人中心</li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-4">
                                <p>购物指南</p>
                                <ul className="list-unstyled">
                                    <li>产品中心</li>
                                    <li>配件专区</li>
                                    <li>线下门店</li>
                                </ul>
                            </div>

                            <div className="col-sm-4 col-md-2">
                                <img src="./img/Footer/a.jpg" />
                                <ul className="list-unstyled">

                                    <li className='gzli'> 微博关注</li>
                                </ul>
                            </div>
                            <div className="col-sm-4 col-md-2">
                                <img src="./img/Footer/b.jpg" />
                                <ul className="list-unstyled">
                                    <li className='gzli'>微信关注</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </footer>
                <div className="copyright ">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <span>客服热线  早8:00-晚17:00:0534-5028398-8203  晚17:00-晚20:00:18712345678客服热线</span>
                            </div>
                            <div className="col-sm-12">
                                <span>杭州我行我素股份有限公司  晚17:00-晚20:00:18712345678</span>
                            </div>
                            <div className="col-sm-12">
                                <span> Copyright © 2012-2017 zhubaijia.com 住百家,版权所有 不得转载 All Rights Reserved.奥ICP备12053354号</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        )
    }
}