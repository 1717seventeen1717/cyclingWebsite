import React, { Component } from 'react'
import '../sass/Landing.scss'
import { NavLink } from 'react-router-dom';
export default class Zhuce extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container login-container ">
                    <div className="logoleft col-md-6">
                        <div>
                            <p>会员注册</p>
                            <p>线下门店线下门店线下门店线下店线下门店线下门店线下门店线下门店线下门店</p>
                            <ul>
                                <li>我们店一对一贴心服务</li>
                                <li>我们店一对一贴心服务</li>
                                <li>我们店一对一贴心服务</li>
                            </ul>
                        </div>

                    </div>
                    <div className="content">
                        <form action="/login" className="form-signin col-md-6" method="post" role="form">
                            <div className='biaoti'>
                                <ul>
                                    <li className='li1'>欢迎注册</li>
                                    <li className='li2'>已有账号,立即 <NavLink to="/landing"><span>登陆</span></NavLink> </li>
                                </ul>
                            </div>
                            <div className="account-page login">
                                <p>  EMALL</p>
                                <input className="form-control" data-val="true" data-val-email="Incorrect email address" data-val-required="Email is required" id="Email" name="Email" placeholder="Email" type="text" value="" />
                                <p>  密码</p>
                                <input className="form-control" data-val="true" data-val-required="Password is required" id="Password" name="Password" placeholder="Password" type="password" value="" />

                                <div className="row forgot">
                                    <div className="col-xs-9">
                                        <input type="checkbox" name="" id="" className='forgot1' /><span> 同意服务条款和隐私相关政策</span>
                                    </div>
                                </div>

                                <button className="btn btn-danger btn-block login-button" type="submit">立即注册</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>



        )
    }
}