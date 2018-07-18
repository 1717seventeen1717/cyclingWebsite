import React,{Component} from 'react';
import { connect } from 'react-redux';
import { getRidingStyleTOP, getRidingStyleBOT, getRidingStyleHOP } from '../action';
import { NavLink } from 'react-router-dom';

import '../sass/RidingStyle.scss';
class RidingStyle extends Component{
    componentDidMount() {
        this.props.getRidingStyleTOP();
        this.props.getRidingStyleBOT();
        this.props.getRidingStyleHOP();
    }
    render(){
        var rst = [], rsb = [],rsh = [];
        if (this.props.RidingStyleTOPList) {
            var newtopllist = this.props.RidingStyleTOPList;
            for (let i = 0; i < newtopllist.length; i++) {
                rst.push(
                    <div className="hoods123" key={i}>
                    <img src={"http://10.31.166.33:8080/ssh/"+newtopllist[i].image} className="hoods_img1"/>
                    <p className=" hoods_img1_tit "><span className="caret"></span>&nbsp;&nbsp;{newtopllist[i].idesc}</p>
                    </div>
                ); 
            }
            console.log(rst)
        }
        if (this.props.RidingStyleBOTList) {
            var newbotllist = this.props.RidingStyleBOTList;
            for (let i = 0; i < newbotllist.length; i++) {
                rsb.push(
                    <div className="hoods123" key={i}>
                    <img src={"http://10.31.166.33:8080/ssh/"+newbotllist[i].image} className="hoods_img1"/>
                    <p className=" hoods_img1_tit "><span className="caret"></span>&nbsp;&nbsp;{newbotllist[i].idesc}</p>
                    </div>
                ); 
            }
            console.log(rst)
        }
        if (this.props.RidingStyleHOPList) {
            var newhopllist = this.props.RidingStyleHOPList;
            for (let i = 0; i < newhopllist.length; i++) {
                rsh.push(
                    <div className="hoods123" key={i}>
                    <img src={"http://10.31.166.33:8080/ssh/"+newtopllist[i].image} className="hoods_img1"/>
                    <p className=" hoods_img1_tit "><span className="caret"></span>&nbsp;&nbsp;{newhopllist[i].idesc}</p>
                    </div>
                ); 
            }
        }
        
        return(
            <div className="RidingStyle_main">
                <h1 className="text-center RS_title">骑行方式</h1>
                <div className="RS_wapper">
                    <div className="hoods dropup">
                    <p>&nbsp;通常来说，自行车车把的形态决足特行赛势</p>
                    <p>不过即快是同一车把，行者也可以采用不同的9行姿势，这在公路车上的体现最为明配。</p>
                    <p>作为园入门公路车的新手，你可能听说过公路车是最适合在干整路面上长距商请行的自行车凤为公路车的车把可以祝供多种弱行资势。</p>
                    <p>这里咱们就来管单聊一思公路车三种景为常见的指和位置——上把位，下把位，横把位——以及三种把位所对应的适用场票。</p>
                    <h2 className="hoods_tit">上把位（Hoods）</h2>
                    <p>&nbsp;坐在车座上，双手前伸，自然地抓住车把上橡胶套的位置，这就是上把位。上把位是公路车骑行中最为常用的握把方式，也被很多人认为<br/>是最符合人体工学的握把方式。上把位也是最容易进行刹车和变速的把位，在交通状况复杂的城市内骑行时，最好使用上把位，以最快地<br/>应对变化无常的交通。与下把位相比，上把位提供上半身相对直立的骑行姿势，匀速巡航时也更加舒适。挥车爬坡时也建议使用上把位，<br/>因为此时身体重心前倾，双手与肩同宽可以保证更大的平衡性。</p>
                    {rst}
                    
                    </div>
                    <div className="drops dropup">
                       <h2 className="drops_tit">下把位（Drops）</h2>
                       <p>顾名思义，即握住公路车弯把的下部。下把位是最容易控车的握把姿势，在职业车手中尤为常见；一般公路车爱好者经过一段时间的练习也可以熟练掌握。下把位提供最为气动、最为激进的骑行姿势，追求速度的话一定要使用下把位。不过光是下把位还不够，还需要整个身体进行协作才能提供最佳的气动效果。具体来说，双手持下把位，同时小臂尽量与地面平行，肘部成90度，肩部放松并不要缩肩；兼顾这些要素的话，背部也会很自然而然地尽可能与地面平行，达到最佳气动姿势。</p>
                       <p className="mt">下把位适用于高速下坡，切记双手要握住车闸。根据杠杆原理，下把位握住车闸时力臂最大，用同样的力刹车时，下把位刹车的效果最佳注意多弯下坡时要预判路况提前刹车以防止侧翻。下把位的另一个适用场景是平路冲刺，最为常见的是平路摇车冲刺。自行车比赛中最后200米左右的冲刺都使用这种骑行姿势。</p>
                       {rsb}
                    </div>
                    <div className="tops dropup">
                       <h2 className="tops_tit">横把位（Tops）</h2>
                       <p>顾名思义，即握住公路车弯把的下部。下把位是最容易控车的握把姿势，在职业车手中尤为常见；一般公路车爱好者经过一段时间的练习也可以熟练掌握。下把位提供最为气动、最为激进的骑行姿势，追求速度的话一定要使用下把位。不过光是下把位还不够，还需要整个身体进行协作才能提供最佳的气动效果。具体来说，双手持下把位，同时小臂尽量与地面平行，肘部成90度，肩部放松并不要缩肩；兼顾这些要素的话，背部也会很自然而然地尽可能与地面平行，达到最佳气动姿势。</p>
                       <p className="mt">横把位有且仅有的两个使用场最是长距离爬坡和低速骑行。长距离爬坡尤其是长距离爬缓坡（坡度5%）时以坐资配合横把位骑行最为舒适，再辅以稳定的踏频（65-95rpm），这样爬坡的效率最高。低速骑行也可使用横把位，即以横把位休闲骑。所以你知道了，但凡被人拉出去休闲骑，先看他是不是横把位！</p>
                       {rsh}
                       <p className="mb">每一种握把姿势都有相应的适用场景。如果刚刚接触公路车不久，建议结合每种场最进行练习，寻找相应场景的过程也是一个探索并延展自己居住区域的过程，说不定还会有意外的惊喜。还等什么？骑车上路吧！</p>
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        RidingStyleTOPList: state.RidingStyle.RidingStyleTOP,
        RidingStyleBOTList: state.RidingStyle.RidingStyleBOT,
        RidingStyleHOPList: state.RidingStyle.RidingStyleHOP,
    }
};
export default connect(mapStateToProps, { getRidingStyleTOP, getRidingStyleBOT, getRidingStyleHOP })(RidingStyle); 