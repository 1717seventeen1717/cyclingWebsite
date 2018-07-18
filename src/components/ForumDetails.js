import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getForum } from '../action';
import '../sass/ForumDetails.scss'
import { NavLink } from 'react-router-dom';
import { relative } from 'path';
class ForumDetails extends Component {
    componentDidMount() {
        this.props.getForum();
    }
    render() {
        var forumarr = [], newForumlist = [];
        if (this.props.forumlist) {
            newForumlist = this.props.forumlist;
            for (let i = 0; i < newForumlist.length; i++) {
                forumarr.push(
                    <div className='bttupianx' key={i}>
                        <div className="row xtupian">
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                {/* <NavLink to="/forum"><img src={"http://10.31.154.166:8080/ssh/" + newForumlist[i].timg} alt="" /></NavLink> */}
                                <NavLink to="/forum"><img src={newForumlist[i].timg} alt="" /></NavLink>
                            </div>
                            <div className="col-xs-6 col-md-8">
                                <p> <NavLink to="/forum" style={{ "color": "#333" }}>{newForumlist[i].ttitle}</NavLink></p>
                                <p><span className="glyphicon glyphicon-user" aria-hidden="true"></span>{newForumlist[i].tbUser.uname} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                            <span className="glyphicon glyphicon-time" aria-hidden="true">{newForumlist[i].tdate}</span></p>
                                <p>{newForumlist[i].tcon}</p>
                                <p><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>{newForumlist[i].peoplelike} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                                                <span className="glyphicon glyphicon-eye-open" aria-hidden="true">{newForumlist[i].peoplewatch}</span></p>
                                <div className='xuxian'></div>
                            </div>
                        </div>
                    </div>
                )
            }


        }
        return (
            <div className='container' style={{ "position": "relative", "background": "#f3f3f3", "paddingBottom": "40px", "marginBottom": "-40px", "minHeight": "450px"  }}>
                <div className='container bttupian'>
                    <img src="./img//forum/forum-banner.jpg" alt="" />
                </div>
                {forumarr}
                {/* <div className=' bttupianx'>
                    <div className="row xtupian">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <NavLink to="/forum"><img src="./img/QXRM/d.jpg" alt="" /></NavLink>
                        </div>
                        <div className="col-xs-6 col-md-8">
                            <p>67岁正当年，千里骑行莫等闲,千里201国道，独揽东三省</p>
                            <p><span className="glyphicon glyphicon-user" aria-hidden="true"></span>二哈 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <span className="glyphicon glyphicon-time" aria-hidden="true">2018-6-10 10:50</span></p>
                            <p>千里骑行莫等闲,千里201国道，独揽东三省千里骑行莫等闲,千里201国道，独揽东三省千里骑行莫等闲,千里201国道，独揽东三省</p>
                            <p><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>12 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <span className="glyphicon glyphicon-eye-open" aria-hidden="true">2567</span></p>
                            <div className='xuxian'></div>
                        </div>
                    </div>
                </div>

                <div className=' bttupianx margin'>
                    <div className="row xtupian">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <img src="./img/QXRM/d.jpg" alt="" />
                        </div>
                        <div className="col-xs-6 col-md-8">
                            <p>67岁正当年，千里骑行莫等闲,千里201国道，独揽东三省</p>
                            <p><span className="glyphicon glyphicon-user" aria-hidden="true"></span>二哈 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <span className="glyphicon glyphicon-time" aria-hidden="true">2018-6-10 10:50</span></p>
                            <p>千里骑行莫等闲,千里201国道，独揽东三省千里骑行莫等闲,千里201国道，独揽东三省千里骑行莫等闲,千里201国道，独揽东三省</p>
                            <p><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>12 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <span className="glyphicon glyphicon-eye-open" aria-hidden="true">2567</span></p>
                            <div className='xuxian'></div>
                        </div>
                    </div>
                </div>

                <div className=' bttupianx margin'>
                    <div className="row xtupian">
                        <div className="col-xs-12 col-sm-6 col-md-4">
                            <img src="./img/QXRM/d.jpg" alt="" />
                        </div>
                        <div className="col-xs-6 col-md-8">
                            <p>67岁正当年，千里骑行莫等闲,千里201国道，独揽东三省</p>
                            <p><span className="glyphicon glyphicon-user" aria-hidden="true"></span>二哈 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <span className="glyphicon glyphicon-time" aria-hidden="true">2018-6-10 10:50</span></p>
                            <p>千里骑行莫等闲,千里201国道，独揽东三省千里骑行莫等闲,千里201国道，独揽东三省千里骑行莫等闲,千里201国道，独揽东三省</p>
                            <p><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>12 &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                            <span className="glyphicon glyphicon-eye-open" aria-hidden="true">2567</span></p>
                            <div className='xuxian'></div>
                        </div>
                    </div>
                </div> */}




                <div className='zongright zongright1'>
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
            </div>


        )
    }
}
const mapStateToProps = state => {
    return {
        forumlist: state.forum.forumInfo
    }
};
export default connect(mapStateToProps, { getForum })(ForumDetails); 