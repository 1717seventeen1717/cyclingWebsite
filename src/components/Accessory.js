import React, { Component } from 'react';
import '../sass/Accessory.scss';
import { NavLink } from 'react-router-dom';

export default class Accessory extends Component {
    render() {
        return (
            <div>
                <div id="nav" className="col-md-12 col-xs-12 noPaddingUl">
                    <img src="./img/ProductList/2产品列表页_02.jpg" className="center-block" />
                </div>
                <div className="container Accessory_first">
                    <h1 className="text-center col-md-12 noPaddingUl" style={{ marginTop: 70 + 'px', marginBottom: 52 + 'px' }}>配件中心</h1>

                    <div className="firstmodel">
                        <h2 style={{ marginBottom: 58 + 'px' }}>
                            <NavLink to="/parts">
                                <span className="left-active-sapn">
                                    装备区
                                </span>
                            </NavLink>
                        </h2>
                        <ul className="row noPaddingUl top-ul">
                            <li className="col-md-4 ac_product-li left-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 ac_product-li middle-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 ac_product-li right-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="row noPaddingUl middle-ul">
                            <li className="col-md-4 ac_product-li left-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 ac_product-li middle-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 ac_product-li right-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="row noPaddingUl bottom-ul">
                            <li className="col-md-4 ac_product-li left-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 ac_product-li middle-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-4 ac_product-li right-li">
                                <div className="ac_banner-product">
                                    <img src="./img/ProductList/2产品列表页_05.jpg" className="center-block firstimage" />
                                    <div className="product-detail">
                                        <p className="text-center">GIANT/捷安特 ATX 870</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}