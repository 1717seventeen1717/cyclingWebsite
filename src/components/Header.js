import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/Header.scss';
export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="pull-left">
                        <NavLink to="/">
                            <img src="./img/header/logo.jpg" alt="我行我速" title="我行我速" />
                        </NavLink>
                    </div>
                    <div className="pull-right">
                        <p className="pull-right login">
                            <NavLink to="/landing">登录</NavLink> | <NavLink to="#">个人中心</NavLink> | <NavLink to="/myOrder">我的订单</NavLink></p>
                        <div className="searchbox">
                            <i className="icon iconfont icon-sousuo sousuo"></i>
                            <input type="text" placeholder="搜索关键字" />
                            <button>搜索</button>
                        </div>
                    </div>
                </div>
                <div className="navHeader">
                    <ul className="container">
                        <li>
                            <NavLink to="/" activeClassName="activeNav" exact={true}>首页 index</NavLink>
                        </li>
                        <li>
                            <NavLink to="/productCenter" activeClassName="activeNav">产品中心 productCenter</NavLink>
                        </li>
                        <li>
                            <NavLink to="/accessory" activeClassName="activeNav">配件专区 actor</NavLink>
                            {/* <NavLink to="/Parts" activeClassName="activeNav">配件专区</NavLink> */}
                        </li>
                        <li>
                            <NavLink to="/offlineStore" activeClassName="activeNav">线下门店 inline</NavLink>
                        </li>
                        <li>
                            <NavLink to="/qxrm" className="riding" activeClassName="activeNav">骑行入门 riding</NavLink>
                            <div className="ridingCate">
                                <div>
                                    <NavLink to="/RidingChoice">骑行选择</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/RidingStyle">骑行方式</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/RidingLine">骑行路线</NavLink>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/newsCenter" activeClassName="activeNav">媒体中心</NavLink>
                        </li>
                        <li>
                            <NavLink to="#" className="jiank" activeClassName="activeNav">健康与维修保养</NavLink>
                            <div className="health">
                                <div>
                                    <NavLink to="/jiank">健康</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/repair">维修</NavLink>
                                </div>
                            </div>
                        </li>
                        <li>
                            <NavLink to="/forumdetails" activeClassName="activeNav">论坛</NavLink>

                        </li>
                        <li>
                            <NavLink to="#" activeClassName="activeNav">会员中心</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName="activeNav">关于我们</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}