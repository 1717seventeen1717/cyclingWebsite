import React,{Component} from 'react';
import '../sass/Cart.scss';
import CartFunction from '../container/CartFunction';
import { NavLink } from 'react-router-dom';

export default class Cart extends Component{
    render(){
        return(
            <div className="mainCart">
                <div className="container padding_l">
                    <span className="myorderWord">购物车</span>
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
                    <ul className="container noPadding top-ul">
                        <li className="redUnderLine"><a href="javascript:;" className="selectedA borderA">全部商品 <span>2</span></a></li>
                        <li><a href="javascript:;" className="bigA borderA">降价商品 <span>2</span></a></li>
                        <li><a href="javascript:;" className="bigA borderA" style={{border:'none'}}>库存紧张 <span>2</span></a></li>
                        <li className="selected">
                            <a href="javascript:;" style={{verticalAlign:'middle'}}>已选商品(不含运费)</a>
                            <a href="javascript:;" style={{verticalAlign:'middle'}}><span className="redStyle total">0.00</span></a>
                            <NavLink to="/ShopSuccess" className="btn btn-primary buy">结算</NavLink>
                        </li>

                    </ul>
                    {/*全选功能*/}
                    <div className="bottomFunction clearfix havePadding">
                        <div className="detail">
                            <input type="checkbox" style={{verticalAlign:'middle',marginRight:10+'px'}}/>
                            <a href="javascript:;" style={{verticalAlign:'middle',marginRight:60+'px'}}>全选</a>
                            <a href="javascript:;">商品信息</a>
                        </div>
                        <div className="selected">
                            <a href="javascript:;" style={{verticalAlign:'middle',marginRight:45+'px'}}>金额</a>
                            <a href="javascript:;" style={{verticalAlign:'middle',marginRight:45+'px'}}><span>数量</span></a>
                            <a href="javascript:;" style={{verticalAlign:'middle',marginRight:45+'px'}}><span>金额</span></a>                            
                        </div>
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
                    <CartFunction/>
                </div>
            </div>
        )
    }
}