import React,{Component} from 'react';
import '../sass/ProIntroduce.scss';

export default class ProIntroduce extends Component{
    render(){
        return(
            <div>
                <div className="container top">
                    <div className="detail">
                        <div className="title">
                            <h3>品牌 : 捷安特<span>(GIANT)</span></h3>
                            <div className="title-bottom">
                                <p>
                                    <span className="col-md-6 noPadding">商品名称 : <b>捷安特(GIANT) Defy Advanced Pro 1</b></span>
                                    <span className="col-md-3 noPadding">商品编号 : <b>2</b></span>
                                    <span className="col-md-3 noPadding">网站 : <b>我行我速官网</b></span>
                                </p>
                                <p>
                                    <span className="col-md-6 noPadding">货号 : <b>801</b></span>
                                    <span className="col-md-3 noPadding">前叉主材质 : <b>碳纤维</b></span>
                                    <span className="col-md-3 noPadding">车把类型 : <b>弯把</b></span>
                                </p>
                                <p>
                                    <span className="col-md-6 noPadding">产品定位 : <b>专业竞赛</b></span>
                                    <span className="col-md-3 noPadding">车架主材质 : <b>碳纤维</b></span>
                                    <span className="col-md-3 noPadding">适用人群 : <b>通用</b></span>
                                </p>
                                <div className="col-md-12 noPadding bottom">
                                    <img className="bottomImg" src="./img/productDetails/3产品详情页_03.jpg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}