import React,{Component} from 'react';
import '../sass/ProComment.scss';
import {getThisDetail,getFourDetail,getComments} from '../action/productComment';
import { connect } from 'react-redux';
import { baseUrl } from '../../common/api';


class ProComment extends Component{
    componentDidMount(){
        // console.log(this.props.Id);
        this.props.getFourDetail();
        var Id=this.props.Id?this.props.Id:'1';
        this.props.getThisDetail(Id);
        this.props.getComments();
    }
    render(){
        
        if(this.props.Total[0]){
            console.log(this.props.Total[0]);
            return(
                <div>
                    <div className="container">
                        <ul className="container middle">
                            <li className="col-md-12 littlePadding">
                                <div className="left-comment">
                                    <div className="headerFavicon">
                                        <img src={baseUrl+this.props.Total[0].tbUser.headlike} className='img-circle'/> 
                                    </div>
                                    <span className="NameTitle">{this.props.Total[0].tbUser.uname}</span>
                                </div>
                                <div className="right-comment">
                                    <div className="star">
                                        <i className="glyphicon glyphicon-star"></i>
                                        <i className="glyphicon glyphicon-star"></i>
                                        <i className="glyphicon glyphicon-star"></i>
                                        <i className="glyphicon glyphicon-star"></i>
                                        <i className="glyphicon glyphicon-star"></i>     
                                    </div>  
                                    <div className="date">
                                        <span>2017-11-04</span>                                    
                                    </div> 
                                    <div className="detail">
                                        <p>{this.props.Total[0].econ}</p>
                                    </div>               
                                </div>
                            </li>
                            <li className="col-md-12 littlePadding">
                                <div className="left-comment">
                                    <div className="headerFavicon">
                                        <img src={baseUrl+this.props.Total[1].tbUser.headlike} className='img-circle'/> 
                                    </div>
                                    <span className="NameTitle">{this.props.Total[1].tbUser.uname}</span>
                                </div>
                                <div className="right-comment">
                                    <div className="star">
                                        <i className="glyphicon glyphicon-star"></i>
                                        <i className="glyphicon glyphicon-star"></i>
                                        <i className="glyphicon glyphicon-star"></i>
                                        <i className="glyphicon glyphicon-star"></i>
                                        <i className="glyphicon glyphicon-star"></i>     
                                    </div>  
                                    <div className="date">
                                        <span>2017-11-04</span>                                    
                                    </div> 
                                    <div className="detail">
                                        <p>{this.props.Total[1].econ}</p>
                                    </div>               
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
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

export default connect(mapStateToProps, { getThisDetail,getFourDetail,getComments })(ProComment); 