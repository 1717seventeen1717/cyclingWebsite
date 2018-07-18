import React, { Component } from 'react'
import '../sass/Landing.scss'
import { NavLink } from 'react-router-dom';
export default class Zhpassword extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="container login-container ">
                    <div className="logoleft col-md-6">
                    <div>
                    <p>关于我们</p>
                    <p>线下门店线下门店线下门店线下门店线下门店线下门店线下门店线下门<br/>店线下门店线下门店线下门店线下门店线下门店</p>
                    <button className='btn btn-danger'>了解更多</button>
                    </div>
                      
                    </div>
                    <div className="content">
                        <form action="/login" className="form-signin col-md-6" method="post" role="form">
                            <div className='biaoti'>
                                <ul>
                                    <li className='li1'>找回密码</li>
                                    <li className='li2'>已有账号,立即 <NavLink to="/zhuce"><span>注册</span> </NavLink> </li>
                                </ul>
                            </div>
                            <div className="account-page login">
                                <p>  EMALL</p>
                                <input  className="form-control" data-val="true" data-val-email="Incorrect email address" data-val-required="Email is required" id="Email" name="Email" placeholder="Email" type="text" value="" />
                                <p>  密码</p>               
                                <div className="row forgot">
                                    <div className="col-xs-7 zma">
                                    <input className="form-control" data-val="true" data-val-required="Password is required" id="Password" name="Password" placeholder="Password" type="password" value="" />
                                    </div>
                                    <div className="col-xs-5">
                                   <button className="btn btn-danger">发送</button>
                                    </div>
                                </div>

                                <button className="btn btn-danger btn-block login-button" type="submit">立即登陆</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>



        )
    }
}