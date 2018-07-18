import React,{Component} from 'react';
import '../sass/CartFunction.scss';
import { NavLink } from 'react-router-dom';

export default class CartFunction extends Component{
    render(){
        return(
                <div className="CartFunction">
                    <div className="bottomFunction clearfix">
                        <div className="clearbaby">
                            <input type="checkbox" style={{verticalAlign:'middle',marginRight:10+'px'}}/>
                            <a href="javascript:;" style={{verticalAlign:'middle',marginRight:30+'px'}}>全选</a>
                            <a href="javascript:;" style={{verticalAlign:'middle',marginRight:30+'px'}}>删除</a>
                            <a href="javascript:;">清除失效宝贝</a>
                        </div>
                        <div className="selected">
                            <a href="javascript:;" style={{verticalAlign:'middle',marginRight:40+'px'}}>已选商品<span className="redStyle">0</span>件</a>
                            <a href="javascript:;"><span>合计(不含运费)</span><i>:</i><span className="redStyle total">0.00</span></a>
                            <NavLink to="/ShopSuccess"  className="noRadius btn btn-primary just-buy">结算</NavLink>
                        </div>
                    </div>
                </div>
        )
    }
}