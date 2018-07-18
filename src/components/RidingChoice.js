import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getRidingChoice} from '../action';
import { NavLink } from 'react-router-dom';

import '../sass/RidingChoice.scss';
class RidingChoice extends Component{
    componentDidMount() {
        this.props.getRidingChoice();
    }
    render(){
        var rsl = [];
        if (this.props.RidingChoiceImgList) {
            var newimgllist = this.props.RidingChoiceImgList;
            for (let i = 0; i < newimgllist.length; i++) {
                rsl.push(
                    <div className="h123" key={i}>
                        <img  src={"http://10.31.166.33:8080/ssh/"+newimgllist[i].image} className= "img1"/>
                    </div>
                ); 
            }
        }
        return(
           <div className="RidingChoice_main">
               <div className="container">
                   <h1 className="text-center RC_title">骑行选择</h1>
                    <div className="clearfix m1">
                        <div className="pull-left">
                            {rsl[0]}
                        </div>
                        <div className="pull-right">
                            <h2 className="text-center">01</h2>
                            <p className="text-left">我们要有一辆适合自己的自行车，根据购买能力，择优选择山地车公路车，然后根据身高，选择适合自己尺码的车架。</p>
                        </div>
                    </div>
                    <div className="clearfix m2">
                        <div className="pull-right">
                        {rsl[1]}
                        </div>
                        <div className="pull-left">
                            <h2 className="text-center">02</h2>
                            <p className="text-left">一款合适的头盔是必须的，没人能保证在骑行过程中能一朝风顺，所以我们要对头部进行一个保护，就需要一款头盔。</p>
                            <p className="p1">切忌不可买便宜或带有裂纹的头盔！</p>
                        </div>
                    </div>
                    <div className="clearfix m3">
                        <div className="pull-left">
                        {rsl[2]}
                        </div>
                        <div className="pull-right">
                            <h2 className="text-center">03</h2>
                            <p className="text-left">手套的作用是防止流汗手和把手之间会减少摩擦，还有就足以防摔车时擦伤手靠。</p>
                        </div>
                    </div>
                    <div className="clearfix m4">
                        <div className="pull-right">
                        {rsl[3]}
                        </div>
                        <div className="pull-left">
                            <h2 className="text-center">04</h2>
                            <p className="text-left">骑行中风沙，太阳紫外线等对眼睛都会造成影响，所以我们需要专业的骑行眼镜来减小外来因素对我们视线的影响。</p>
                        </div>
                    </div>
                    <div className="clearfix m5">
                        <div className="pull-left">
                        {rsl[4]}
                        </div>
                        <div className="pull-right">
                            <h2 className="text-center">05</h2>
                            <p className="text-left">骑行中会出汗，会遇着风沙，这时候骑行头巾可以帮助我们吸走多余的汗，可以帮我住我们阻挡风沙，防止风沙吹入口鼻。</p>
                        </div>
                    </div>
                    <div className="clearfix m6">
                        <div className="pull-right">
                        {rsl[5]}
                        </div>
                        <div className="pull-left">
                            <h2 className="text-center">06</h2>
                            <p className="text-left">对于长途摘行，一直背着包会很累，所以我们需要一个如架对我们所背的包进行固定，然后能让自己轻松骑行。</p>
                        </div>
                    </div>
                    <div className="clearfix m7">
                        <div className="pull-left">
                        {rsl[6]}
                        </div>
                        <div className="pull-right">
                            <h2 className="text-center">07</h2>
                            <p className="text-left">对于喜爱骑行的人，都有过夜晚骑行的经历，但是夜晚可见度不高，地面难免会有坑洼。</p>
                            <p className="p1">所以我们需要一个合适的手电筒提高视野。</p>
                        </div>
                    </div>
                    <div className="clearfix m8">
                        <div className="pull-right">
                        {rsl[7]}
                        </div>
                        <div className="pull-left">
                            <h2 className="text-center">08</h2>
                            <p className="text-left">补胎工具和打气筒：路上难免会遇着路面坑洼或者一些碎玻璃，对我们的车胎都存在了一定的危险.</p>
                            <p className="p1">所以补胎工具和打气筒在骑行中尤其重要。</p>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}
const mapStateimgrops = state => {
    return {
        RidingChoiceImgList: state.RidingChoice.RidingChoiceImg,
    }
};
export default connect(mapStateimgrops, { getRidingChoice })(RidingChoice); 