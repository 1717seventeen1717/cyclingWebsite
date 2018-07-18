import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getForum } from '../action';
import '../sass/Forum.scss'
class Forum extends Component {
    componentDidMount() {
        this.props.getForum();
    }
    // show = () => {
    //     style = { display: 'block' }
    // }
    render() {
        return (
            <div className='Forum'>

                <div className='container' style={{ "position": "relative", "background": "#f3f3f3", "paddingBottom": "40px", "marginBottom": "-40px", "minHeight": "1083px" }}>
                    <div className="row">
                        <div className='leftf'>
                            <div className="col-xs-9">
                                <div className="row">
                                    <div className="col-xs-2">
                                        <img src="./img/QXRM/a.jpg" alt="..." className="img-circle" />
                                    </div>
                                    <div className="col-xs-9 chuang">
                                        <p>闯昆仑 过界山 世界屋脊行----2017骑行新藏线</p>
                                        <p>GD | 骑行游记</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='zongright' style={{ "top": "98px" }}>
                            <div className='rightqd'>
                                <button><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span>&nbsp;&nbsp;签到</button>
                                <ul>
                                    <li>&nbsp;&nbsp;<span className="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;&nbsp;0 人</li>
                                    <li>&nbsp;&nbsp;<span className="glyphicon glyphicon-equalizer" aria-hidden="true"></span>&nbsp;&nbsp;签到看排名</li>
                                </ul>
                            </div>


                            <div className='right1'>
                                <ul>
                                    <li>产品热销</li>
                                    <li><img src="./img/home/newpro_1.jpg" alt="" /></li>
                                    <li><button>了解更多</button></li>
                                </ul>
                            </div>

                            <div className='right2'>
                                <ul>
                                    <li>热门帖子</li>
                                    <li>TG-||躺车宣传视屏样稿修改意
                                    <p>2015-12-28/紫电青霜</p>
                                    </li>
                                    <li>TG-||躺车宣传视屏样稿修改意
                                     <p>2015-12-28/紫电青霜</p>
                                    </li>
                                    <li>TG-||躺车宣传视屏样稿修改意
                                     <p>2015-12-28/紫电青霜</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className='left1'>
                            <div className="col-xs-9">
                                <div className="row">
                                    <div className="col-xs-2">
                                    </div>
                                    <div className="col-xs-9 chuang">
                                        <p> <span className="glyphicon glyphicon-time" aria-hidden="true"></span>2018-6-10 10:50 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                        <span className="glyphicon glyphicon-heart" aria-hidden="true"></span>12&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                        <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>2567
                                        </p>
                                        {/* <p>本贴最后由GDZGQ163 于 2018-5-31 10:13 编辑</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='left2'>
                            <div className="col-xs-9">
                                <div className="row">
                                    <div className="col-xs-2">
                                    </div>
                                    <div className="col-xs-9 chuang">
                                        <p> 骑行新藏线是每一个自行车爱好者的愿望。我2013年暑假完成骑行川藏线后就开始计划骑行新藏线，由于种种原因
一直没能成行。<br />
                                            <span></span>2017年7月27日，我从叶城出发，骑自行车翻越昆仑山，沿国道G219、G318，省道S204、S307，经阿里、日喀则、江孜等地，于8月21日到达拉萨，历时26天，行程3000多公里。<br />
                                            <span></span>其中骑行23天，行程2650公里；徒步冈仁波齐转山1天，50公里；搭车去珠峰2天，500多公里。<br />
                                            <span></span>新藏线是最具挑战性的一条进藏路线，走一次新藏线会给人带来一生的回味。</p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='left3'>
                            <div className="col-xs-9">
                                <img src="./img/forum/forumDetails.jpg" alt="" />
                            </div>
                        </div>

                        <div className='left4 col-xs-9'>
                            {/* 回复框 */}
                            <div className="ureply" >
                                <div className="userreply">
                                    <div className="Iwant">我要回复<span className="closeX">X</span></div>
                                    <div className="reply-con">
                                        <div>
                                            <span>内容：</span>
                                            <textarea style={{ "resize": "none" }}></textarea>
                                        </div>
                                        <div className="reply-btn">
                                            <button>发表回复</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-9">
                                <div className="row">
                                    <div className="col-xs-1">
                                        <img src="./img/QXRM/a.jpg" alt="..." className="img-circle" />
                                    </div>
                                    <div className="col-xs-11 chuang">
                                        <p>GD <span className="glyphicon glyphicon-time" aria-hidden="true"></span>2018-6-10 10:50<span className='huifu'>回复</span></p>
                                        <p>闯昆仑 过界山 世界屋脊行----2017骑行新藏线闯昆仑 过界山 世界屋脊行----2017骑行新藏线</p>
                                    </div>
                                </div>
                            </div>


                            <div className="col-xs-9">
                                <div className="row">
                                    <div className="col-xs-1">
                                        <img src="./img/QXRM/a.jpg" alt="..." className="img-circle" />
                                    </div>
                                    <div className="col-xs-11 chuang">
                                        <p>GD <span className="glyphicon glyphicon-time" aria-hidden="true"></span>2018-6-10 10:50<span className='huifu'>回复</span></p>
                                        <p>闯昆仑 过界山 世界屋脊行----2017骑行新藏线闯昆仑 过界山 世界屋脊行----2017骑行新藏线</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className='left5 col-xs-9'>
                            <div className="col-xs-9">
                                <div className="row">
                                    <div className="col-xs-2">
                                        <img src="./img/QXRM/a.jpg" alt="..." className="img-circle" />
                                    </div>
                                    <div className="col-xs-10 chuang">
                                        <textarea style={{ "resize": "none" }}></textarea>
                                        <button className="btn btn-danger">发表回复</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>



        )

    }
}

const mapStateToProps = state => {
    return {
        forumlist: state.forum.forumInfo
    }
};
export default connect(mapStateToProps, { getForum })(Forum); 