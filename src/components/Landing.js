import React, { Component } from 'react'
import { connect } from 'react-redux';
import {checkUserLogin} from '../action';
import '../sass/Landing.scss'
// import '../sass/login.scss'
import { NavLink } from 'react-router-dom';
class Landing extends Component {
    userLogin=()=>{
        this.props.checkUserLogin({
            email:this.refs.email.value,
            password:this.refs.password.value
        });
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="container login-container ">
                    <div className="logoleft col-md-6">
                        <div>
                            <p>线下门店</p>
                            <p>线下门店线下门店线下门店线下门店线下门店线下门店线下门店线下门<br />店线下门店线下门店线下门店线下门店线下门店</p>
                            <button className='btn btn-danger'>了解更多</button>
                        </div>

                    </div>
                    <div className="content">
                        <form action="/login" className="form-signin col-md-6" method="post" role="form">
                            <div className='biaoti'>
                                <ul>
                                    <li className='li1'>欢迎登录</li>
                                    <li className='li2'>没有账号,立即 <NavLink to="/zhuce"><span>注册</span></NavLink> </li>
                                </ul>
                            </div>
                            <div className="account-page login">
                                <p>  EMALL</p>
                                <input className="form-control" ref="email" data-val="true" data-val-email="Incorrect email address" data-val-required="Email is required" id="Email" name="Email" placeholder="Email" type="text" />
                                <p>  密码</p>
                                <input className="form-control" ref="password" data-val="true" data-val-required="Password is required" id="Password" name="Password" placeholder="Password" type="password"  />

                                <div className="row forgot">
                                    <div className="col-xs-7">
                                        <input type="checkbox" name="" id="forgetpwd" className='forgot1' />记住密码
                                    </div>
                                    <div className="col-xs-5">
                                        <NavLink to="/zhpassword"><span>忘记密码?</span></NavLink>
                                    </div>
                                </div>

                                <button className="btn btn-danger btn-block login-button" type="button" onClick={this.userLogin}>立即登陆</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>



        )
    }
}
const mapStateToProps = state =>{
    return{
        list: state.login.userinfo
    }
};
export default connect(mapStateToProps,{checkUserLogin})(Landing); 