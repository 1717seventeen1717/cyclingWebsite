import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/RidingChoice.scss';
export default class HealthSpirit extends Component{
    render(){
        return(
           <div className="RidingChoice_main">
               <div className="container">
                   <h1 className="text-center RC_title">精神</h1>
                    <div className="clearfix m1 HS_b">
                        <div className="pull-left">
                            <img src="./img/HealthSpirit/1.jpg"/>
                        </div>
                        <div className="pull-right">
                            <h2 className="text-center">01</h2>
                            <p className="text-left">据斯坦福大学医学院的研究：要求久坐的失眠患者每隔一天骑车20-30分钟。结果，这些患者的入睡时间缩短了一半，睡眠时间延长了近一个小时。实验证明，一大早骑车确实可以提高睡眠质量。</p>
                        </div>
                    </div>
                    <div className="clearfix m2 HS_b">
                        <div className="pull-right">
                            <img src="./img/HealthSpirit/2.jpg"/>
                        </div>
                        <div className="pull-left">
                            <h2 className="text-center">02</h2>
                            <p className="text-left">伊利诺伊大学的研究人员发现，骑车每提升5%的心肺功能，在智力测试中就能提升15%。这是因为骑车可以帮助大脑在记忆区产生新的脑细胞，而这个区城通常从30岁开始逐渐退化。</p>
                        </div>
                    </div>
                    <div className="clearfix m3 HS_b">
                        <div className="pull-left">
                            <img src="./img/HealthSpirit/3.jpg"/>
                        </div>
                        <div className="pull-right">
                            <h2 className="text-center">03</h2>
                            <p className="text-left">骑自行车是一项全家人可以一起参与的运动。最小的孩子可以坐在儿童座椅或婴儿拖车上，而且骑车对关节有好处，所以也没有什么理由不让爷爷奶奶参与进来，全家周末一起出去编车，享受生活，感受健康。</p>
                        </div>
                    </div>
                    <div className="clearfix m4 ">
                        <div className="pull-right">
                            <img src="./img/HealthSpirit/4.jpg"/>
                        </div>
                        <div className="pull-left">
                            <h2 className="text-center">04</h2>
                            <p className="text-left">即使骑车的时候你很痛苦，骑过几公里就会感觉精神倍增。专家学者麦卡洛克说：“每周三次30分钟的运动治疗就足以让人恢复精神。“
                            骑车，能让你感到快乐！</p>
                        </div>
                    </div>
               </div>
           </div>
        )
    }
}