import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/about.scss';
export default class About extends Component{
    render(){
        return (
            <div>
                <div className="container">
                    <img src="./img/about/aboutpic.jpg" width="1000px"/>
                </div>
                <div className="container">
                    <div className="bigTitle">关于我们</div>
                    <div className="aboutus">
                        <p>杭州我行我速股份有限公司创立于2013年。是面向全球自行车业界和自行车运动爱好者的专业资讯平台和服务平台。专注各类自行车资讯专业报道，擅长以高效率、高质量的方式传播自行车资讯并且还未骑行爱好者提供了购买服务。可以搜索自行车相关产品进行购买，秉承专业、可靠的信念，让每位骑行爱好者和购买者都能享受舒心的服务和专业的保障。</p>
                        <p>2015年，我行我速推出手机客户端，并不断进行更新迭代，优化功能体验。目前，我行我速APP已经整合咨询和社交功能。你还可以关注我行我速微博账号和微信订阅号，轻松获取自行车资讯推送。此外，我行我速还与ZAKER、搜狐、鲜果、Flipboard和魅族阅读等内容聚合平台建立合作，让你可以随时随地享受骑行资讯服务。</p>
                        <p>杭州我行我速股份有限公司还组织作为自行车行业的企业，是国内较早倡导骑行文化的品牌。2016年，由我行我速联合中国自行车协会举办的“低碳行动，骑行中国骑行活动”，创千人骑行记录。我行我速旨在通过骑行文化的建设与弘扬，让更多的中国人加入健康低碳的骑行运动之中，开启中国健康骑行时代。</p>
                        <p>目前，我行我速销售渠道已覆盖全国多个省、市、自治区，是国内销售网点最多的自行车企业之一，店面形急统一，风格时尚，服务专业到位；每个专卖店均设有自行车俱乐部，成为广大骑友分享和出游的平台，为所有骑行爱好者提供理想的骑行装备。</p>
                    </div>
                </div>
            </div>
        )
    }
}