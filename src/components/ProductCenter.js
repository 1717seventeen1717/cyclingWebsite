import React,{Component} from 'react';
import '../sass/ProductCenter.scss';
import { NavLink } from 'react-router-dom';
import { getProductCenter,getThisId } from '../action/productCenter';
import { connect } from 'react-redux';


class ProductCenter extends Component{
    componentDidMount(){
        this.props.getProductCenter('1')
        this.props.getProductCenter('2')
        this.props.getProductCenter('3')
    }
    render(){
        var mountain=[],road=[],fold=[];
        console.log(baseUrl);
        // console.log(this.props.id);
        if(this.props.Mountain.length>0&&this.props.Road.length>0,this.props.Fold.length>0){
            // console.log(this.props.Mountain.length);
            mountain=this.props.Mountain;
            road=this.props.Road;
            fold=this.props.Fold;
            
            // console.log(this.props.Mountain,this.props.Road,this.props.Fold);
        // console.log(this.props.ProductCenter);
            // console.log(mountain);
            // console.log(fold);
            var amsx=[],bmsx=[],arsx=[],brsx=[],afsx=[],bfsx=[];
            for(let i=0;i<mountain.length/2;i++){
                let a=(<NavLink to="/productComment" className="pc_banner-product" data-link={mountain[i].pid} onClick={() => this.props.getThisId(mountain[i].pid)}>
                    <img src={baseUrl+mountain[i].pimg} className="center-block firstimage"/>
                    <div className="product-detail">
                        <p className="text-center">{mountain[i].pname}</p>
                        <p className="text-center price"><span className="redStyle">￥</span>{mountain[i].marketPrice}</p>   
                    </div>       
                </NavLink>)
                // console.log(i);
                if((i+1)%2==0){
                    amsx.push(
                        <li key={i} className="col-md-4 pc_product-li middle-li">
                            {a}
                        </li>
                    )
                }
                else if((i+1)%3==0){
                    amsx.push(
                        <li key={i} className="col-md-4 pc_product-li right-li">
                            {a}       
                        </li>
                    )
                }
                else{
                    amsx.push(
                        <li key={i} className="col-md-4 pc_product-li left-li">
                            {a}      
                        </li>
                    )
                }
            }
            for(let i=mountain.length/2;i<mountain.length;i++){
                let a=(<NavLink to="/productComment" className="pc_banner-product" data-link={mountain[i].pid} onClick={() => this.props.getThisId(mountain[i].pid)}>
                    <img src={baseUrl+mountain[i].pimg} className="center-block firstimage"/>
                    <div className="product-detail">
                        <p className="text-center">{mountain[i].pname}</p>
                        <p className="text-center price"><span className="redStyle">￥</span>{mountain[i].marketPrice}</p>   
                    </div>       
                </NavLink>)
                if((i+1)%2!=0&&(i+1)%3!=0){
                    bmsx.push(
                        <li key={i} className="col-md-4 pc_product-li middle-li">
                            {a}       
                        </li>
                    )
                }
                else if((i+1)%3==0&&(i+1)%2==0){
                    bmsx.push(
                        <li key={i} className="col-md-4 pc_product-li right-li">
                            {a}       
                        </li>
                    )
                }
                else{
                    bmsx.push(
                        <li key={i} className="col-md-4 pc_product-li left-li">
                            {a}      
                        </li>
                    )
                }
            }
            for(let i=0;i<road.length/2;i++){
                let b=(<NavLink to="/productComment" className="pc_banner-product" data-link={road[i].pid} onClick={() => this.props.getThisId(road[i].pid)}>
                    <img src={baseUrl+road[i].pimg} className="center-block firstimage"/>
                    <div className="product-detail">
                        <p className="text-center">{road[i].pname}</p>
                        <p className="text-center price"><span className="redStyle">￥</span>{road[i].marketPrice}</p>   
                    </div>       
                </NavLink>)
                if((i+1)%2==0){
                    arsx.push(
                        <li key={i} className="col-md-4 pc_product-li middle-li">
                            {b}     
                        </li>
                    )
                }
                else if((i+1)%3==0){
                    arsx.push(
                        <li key={i} className="col-md-4 pc_product-li right-li">
                            {b}       
                        </li>
                    )
                }
                else{
                    arsx.push(
                        <li key={i} className="col-md-4 pc_product-li left-li">
                            {b}       
                        </li>
                    )
                }
            }
            for(let i=road.length/2;i<road.length;i++){
                let b=(<NavLink to="/productComment" className="pc_banner-product" data-link={road[i].pid} onClick={() => this.props.getThisId(road[i].pid)}>
                    <img src={baseUrl+road[i].pimg} className="center-block firstimage"/>
                    <div className="product-detail">
                        <p className="text-center">{road[i].pname}</p>
                        <p className="text-center price"><span className="redStyle">￥</span>{road[i].marketPrice}</p>   
                    </div>       
                </NavLink>)
                if((i+1)%2!=0&&(i+1)%3!=0){
                    brsx.push(
                        <li key={i} className="col-md-4 pc_product-li middle-li">
                            {b}       
                        </li>
                    )
                }
                else if((i+1)%3==0&&(i+1)%2==0){
                    brsx.push(
                        <li key={i} className="col-md-4 pc_product-li right-li">
                            {b}       
                        </li>
                    )
                }
                else{
                    brsx.push(
                        <li key={i} className="col-md-4 pc_product-li left-li">
                           {b}       
                        </li>
                    )
                }
            }
            for(let i=0;i<fold.length/2;i++){
                // console.log(i);
                // console.log(fold);
                let c=(<NavLink to="/productComment" className="pc_banner-product" onClick={() => this.props.getThisId(mountain[i].pid)}>
                <img src={baseUrl+fold[i].pimg} className="center-block firstimage"/>
                <div className="product-detail">
                    <p className="text-center">{fold[i].pname}</p>
                    <p className="text-center price"><span className="redStyle">￥</span>{fold[i].marketPrice}</p>   
                </div>       
            </NavLink>)
                if((i+1)%2==0){
                    afsx.push(
                        <li key={i} className="col-md-4 pc_product-li middle-li">
                            {c}       
                        </li>
                    )
                }
                else if((i+1)%3==0){
                    afsx.push(
                        <li key={i} className="col-md-4 pc_product-li right-li">
                            {c}       
                        </li>
                    )
                }
                else{
                    afsx.push(
                        <li key={i} className="col-md-4 pc_product-li left-li">
                            {c}       
                        </li>
                    )
                }
            }
            for(let i=fold.length/2;i<road.length;i++){
                let c=(<NavLink to="/productComment" className="pc_banner-product"  onClick={() => this.props.getThisId(mountain[i].pid)}>
                    <img src={baseUrl+fold[i].pimg} className="center-block firstimage"/>
                    <div className="product-detail">
                        <p className="text-center">{fold[i].pname}</p>
                        <p className="text-center price"><span className="redStyle">￥</span>{fold[i].marketPrice}</p>   
                    </div>       
                </NavLink>)
                if((i+1)%2!=0&&(i+1)%3!=0){
                    bfsx.push(
                        <li key={i} className="col-md-4 pc_product-li middle-li">
                            {c}       
                        </li>
                    )
                }
                else if((i+1)%3==0&&(i+1)%2==0){
                    bfsx.push(
                        <li key={i} className="col-md-4 pc_product-li right-li">
                            {c}       
                        </li>
                    )
                }
                else{
                    bfsx.push(
                        <li key={i} className="col-md-4 pc_product-li left-li">
                            {c}       
                        </li>
                    )
                }
            }
            return (
                <div>
                    <div id="nav" className="col-md-12 col-xs-12 noPaddingUl">
                        <img src="./img/ProductList/2产品列表页_02.jpg" className="center-block"/>
                    </div>
                    <div className="container first">
                        <h1 className="text-center col-md-12 noPaddingUl" style={{marginTop:70+'px',marginBottom:52+'px'}}>产品中心</h1>
                        <div className="firstmodel">
                            <h2 style={{marginBottom: 58+'px'}}>
                                <span className="left-active-sapn">
                                山地车
                                </span>
                            </h2>
                            <ul className="row noPaddingUl top-ul">
                                {amsx}
                            </ul>
                            <ul className="row bottom-ul noPaddingUl">
                                {bmsx}                
                            </ul>
                        </div>
                    </div>
                    <div className="container second">
                        <div className="secondmodel">
                            <h2 style={{marginBottom: 58+'px'}}>
                                <a href="#">
                                    <span className="left-span">
                                    公路车
                                    </span>
                                </a>
                            </h2>
                            <ul className="row noPaddingUl top-ul">
                                {arsx}                     
                            </ul>
                            <ul className="row bottom-ul noPaddingUl">
                                {brsx}                    
                            </ul>
                        </div>
                        <div className="thirdmodel">
                            <h2 style={{marginBottom: 58+'px'}}>
                                <a href="#">
                                    <span className="left-span">
                                    折叠车
                                    </span>
                                </a>
                            </h2>
                            <ul className="row noPaddingUl top-ul">
                                {afsx}                   
                            </ul>
                            <ul className="row bottom-ul noPaddingUl">
                                {bfsx}                  
                            </ul>
                        </div>
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
        Mountain: state.product.Mountain,
        Road: state.product.Road,
        Fold: state.product.Fold,
        Id:state.product.Id
    }
};

export default connect(mapStateToProps, { getProductCenter,getThisId })(ProductCenter); 