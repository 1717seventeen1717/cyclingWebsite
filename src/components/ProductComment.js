import React,{Component} from 'react';
import ProIntroduce from '../container/ProIntroduce';
import { NavLink } from 'react-router-dom';
import '../sass/ProductComment.scss';
import {getThisDetail,getFourDetail,getComments} from '../action/productComment';
import { connect } from 'react-redux';

class ProductComment extends Component{
    componentDidMount(){
        // console.log(this.props.Id);
        this.props.getFourDetail();
        var Id=this.props.Id?this.props.Id:'1';
        this.props.getThisDetail(Id);
        this.props.getComments();
    }
    render(){
        // console.log(this.props.Id);
        // console.log(this.props.Comment);
        
        if(this.props.Comment.product){
            // console.log(this.props.Total);
            
            // console.log(this.props.Four);
            // console.log(this.props.Comment.product);
            var four=this.props.Four;
            var data=this.props.Comment.product;
            // console.log(this.props.Comment.product);
            return(
                <div>
                    <div className="container" style={{marginTop:80+'px'}}>
                        <div className="container">
                            <a href="#" className="red-border col-md-4 noPadding" style={{width:340,height:340,paddingTop:80}}>
                                <img src={baseUrl+data.pimg} style={{width:100+'%'}} />
                            </a>
                            <div className="col-md-7 right-detail">
                                <div className="top-detail">
                                    <div>
                                        <h2 className="h2title">{data.pname}</h2>
                                    </div>
                                    {/*右边详细信息*/}
                                    <div style={{width:65+'%'}} className="bg-gray clearfix">
                                        <div className="left-bg">
                                            <p>
                                                <span>官网价</span>
                                                <b>{data.marketPrice}</b>                                        
                                            </p>
                                            <p>
                                                <span>运费险</span>
                                                <span>{data.shopPrice}</span> 
                                            </p>
                                        </div>
                                        <div className="right-bg">
                                            <p className="text-center"><span>累计评价</span></p>
                                            <p className="text-center"><b>0</b></p>
                                        </div>
                                    </div>
                                    <div className="operateContainer" style={{width:65+'%'}}>
                                        <div>
                                            <p className="operate-left"><span>选择尺码</span></p>
                                            <p className="operate-right">
                                                <a href="javascript:;" data-title="S">S</a>
                                                <a href="javascript:;" data-title="M">M</a>
                                                <a href="javascript:;" data-title="XS">XS</a>
                                                <a href="javascript:;" data-title="ML">ML</a>
                                            </p>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="shopContainer" style={{width:65+'%'}}>
                                        <div>
                                            <div className="shop-left"><span>选择门店</span></div>
                                            <div className="shop-right">
                                                <a href="javascript:;" className="selectService">
                                                    <span className="favio iconfont icon-location"></span>
                                                    <span className="normalFont">选择服务门店</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div></div>
                                    </div>
                                    <div className="caculate">
                                        <div className="form-inline btnGroup">
                                            <button type="button" className="btn btn-default noRadius"><span className="reduceSpan">-</span></button>
                                            <input type="text" className="form-control noRadius text-center" aria-label="..." style={{width:56+'px'}} defaultValue="1"/>
                                            <button type="button" className="btn btn-default noRadius"><span className="increaseSpan">+</span></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-detail">
                                    <div>
                                        <button type="button" className="btn btn-default noRadius buyButton"><span className="buy">立即购买</span></button>
                                        <button type="button" className="btn btn-default noRadius addButton"><span className="glyphicon glyphicon-shopping-cart" style={{verticalAlign:'center'}}></span><NavLink to="/cart" style={{verticalAlign:'center'}} className="addCart">加入购物车</NavLink></button>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="recommend">
                            <div className="recommend-top row"><a href="javascript:;" className="recommend-top-a">店长推荐</a></div>
                            <ul className="row bikeList">
                                <li className="col-md-3 noPadding">
                                    <a href="javascript:;"><img src={baseUrl+four[0].pimg}/></a>
                                    <p>{four[0].shopPrice}</p>
                                </li>
                                <li className="col-md-3 noPadding">
                                    <a href="javascript:;"><img src={baseUrl+four[1].pimg}/></a>                                 
                                    <p>{four[1].shopPrice}</p>
                                </li>
                                <li className="col-md-3 noPadding">
                                    <a href="javascript:;"><img src={baseUrl+four[2].pimg}/></a>
                                    <p>{four[2].shopPrice}</p>
                                </li>
                                <li className="col-md-3 noPadding">
                                    <a href="javascript:;"><img src={baseUrl+four[3].pimg}/></a>
                                    <p>{four[3].shopPrice}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="introduce-comment">
                            <div className="introduce-top row">
                                <NavLink to="/productComment/ProIntroduce" className="introduce-top-a">商品介绍</NavLink>
                                <NavLink to="/productComment/ProComment" className="introduce-top-a">商品评价(<span>2</span>)</NavLink>
                            </div>                      
                        </div>
                    </div>
                </div>
            )
        }
        else{
            return(<div></div>)
        }
    }
}

const mapStateToProps = state => {
    return {
        Comment: state.comment.comment,
        Id:state.product.Id,
        Four:state.comment.four,
        Total:state.comment.totalComment
    }
};

export default connect(mapStateToProps, { getThisDetail,getFourDetail,getComments })(ProductComment); 