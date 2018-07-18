import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getRidingLine } from '../action';
import { NavLink } from 'react-router-dom';

import '../sass/RidingLine.scss';
class RidingLine extends Component{
    componentDidMount() {
        this.props.getRidingLine();
    }
    render(){
        var rsl = [];
        if (this.props.RidingLineImgList) {
            var newimgllist = this.props.RidingLineImgList;
            for (let i = 0; i < newimgllist.length; i++) {
                rsl.push(
                    <div className="h123" key={i}>
                    <p className="text-lift"><i>路线：</i><span>{newimgllist[i].road}</span></p>
                        <p className="text-lift"><i>特点：</i><span>{newimgllist[i].tbImage.idesc}</span></p>
                        <p className="text-lift"><i>最佳骑行时间：</i><span>{newimgllist[i].niceseason}</span> </p>
                        <p className="text-lift"><i>所需天数：</i><span>{newimgllist[i].needtime}</span></p>
                        <p className="text-lift"><i>骑行准备：</i><span>{newimgllist[i].needthings}</span></p>
                        <img  src={"http://10.31.166.33:8080/ssh/"+newimgllist[i].tbImage.image} className= "img1"/>
                    </div>
                ); 
            }
        }
        return(
            <div className="RidingLine_main">
                <div className="RL_wapper">
                    <h1 className="text-center RL_title">路线指南</h1>
                    <div className="line1">
                        {rsl}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateimgrops = state => {
    return {
        RidingLineImgList: state.RidingLine.RidingLineImg,
    }
};
export default connect(mapStateimgrops, { getRidingLine })(RidingLine); 