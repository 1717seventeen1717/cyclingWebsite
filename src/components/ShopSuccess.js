import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/ShopSuccess.scss';
export default class ShopSuccess extends Component {
    render() {
        return (
            <div className="ShopSuccess_main">
                <div className="container">
                    <p className="text-center"><span className="bingo" >√</span><span>您的订单提交成功，我们将尽快为您发送电子兑换券！</span></p>
                    <div><span href="javascript:;" className="success">继续购物</span></div>
                </div>
            </div>
        )
    }
}