import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/myOrder.scss';
export default class MyOrder extends Component {
    render() {
        return (
            <div>
                <div className="container padding_l">
                    <span className="myorderWord">我的订单</span>
                    <div className="pull-right seach-order">
                        {/* <i className="iconfont icon-jiantouxia"></i> */}
                        <select className="select-list">
                            <option value="1">宝贝</option>
                            <option value="2">商家</option>
                            <option value="3">店铺</option>
                        </select>
                        <input type="text"  />
                        <button type="button">搜索</button>
                    </div>
                </div>
                <div className="container padding_l ">
                    <div className="allpro">
                        <span>全部商品&nbsp;3</span>
                        <span>商品信息</span>
                    </div>
                    {/* 商品订单表格 */}
                    <div className="prolist">
                        <table className="orderList">
                            <tbody>
                                <tr>
                                    <td><input type="checkbox" /></td>
                                    <td>
                                        <div className="pic">
                                            <img src="./img/myorder/proorder1.jpg"/>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <p>SPECIALIZED闪电
                                            CHISEL EXPERT
                                            男式专家款29er铝合
                                            金XC山地自行车</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <p>提货方式：电子兑换卷</p>
                                            <p>轮径尺寸：29英寸</p>
                                            <p>颜色分类：磨砂黑/经典黑M</p>
                                            <p>速别：22速</p>
                                            <p>门店：浙江杭州SPECIALIZED天目山路概念店（CS）</p>
                                        </div>
                                    </td>
                                    <td>
                                        ￥13999.00
                                    </td>
                                    <td>
                                        <div>
                                            <button>-</button>
                                            <input type="text" defaultValue="1"/>
                                            <button>+</button>
                                        </div>
                                    </td>
                                    <td>
                                        ￥13999.00
                                    </td>
                                    <td>
                                        <p><NavLink to="#">发表评论</NavLink></p>
                                        <p><NavLink to="#">删除</NavLink></p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}