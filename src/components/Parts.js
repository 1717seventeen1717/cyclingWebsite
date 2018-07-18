import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/Parts.scss';
export default class Parts extends Component{
    render(){
        return(
            <div >
                <div id="nav" className="col-md-12 col-xs-12 noPaddingUl">
                <img src="./img/ProductList/2产品列表页_02.jpg" className="center-block"/>
                </div>
                <div className="Parts_main">
                    <div className="container">
                        <div className="clearfix mg1">
                            <div className="pull-left mg1_l">
                            <img src="./img/Parts/1.jpg"/>
                            </div>
                            <div className="pull-left mg1_r">
                            <p className="text-left">眼镜是自行车装备的核心部件之一。<br/>
                            我们在设计眼镜时，只关注自行车的要求。<br/>你有专门为道路、山脉、步道、城市以及介<br/>于两者之间的一切需要而设计的眼镜。</p>
                            </div>
                        </div>
                        <div className="mg2">
                        <img src="./img/Parts/2.jpg"/>
                        </div>
                        <div className="clearfix mg3">
                        <div className="pull-left mg3_l">
                        <p className="text-center">可互换的镜片容易改变，没有轴或针可以折断。<br/>
                        眼镜可互换镜头，让您微调您的视觉，为您的旅程。</p>
                        </div>
                        <div className="pull-right">
                        <img src="./img/Parts/3.jpg"/>
                        </div>
                        </div>
                        <div className="mg4">
                        <img src="./img/Parts/4.jpg"/>
                        </div>
                        <div className="clearfix mg5">
                            <div className="pull-left">
                            <img src="./img/Parts/5.jpg"/>
                            </div>
                            <div className="pull-left ">
                            <p className="text-left">眼镜是自行车装备的核心部件之一。<br/>
                            我们在设计眼镜时，只关注自行车的要求。<br/>你有专门为道路、山脉、步道、城市以及介<br/>于两者之间的一切需要而设计的眼镜。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}