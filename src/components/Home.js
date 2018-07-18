import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCarousel, getNewproduct, getNewsCenter } from '../action';

import '../sass/Home.scss';
import { baseUrl } from '../../common/api';

class Home extends Component {
    componentDidMount() {
        this.props.getNewproduct();
        this.props.getCarousel();
        this.props.getNewsCenter();
    }
    componentDidUpdate() {
        var mySwiper = new Swiper('.Box_con .swiper-container', {
            noSwiping: true,
            noSwipingClass: 'stop-swiping',
            loop: true,
            slidesPerView: 'auto',
            loopedSlides: 5,
            navigation: {
                nextEl: '.btnr',
                prevEl: '.btnl'
            }
        });
        var swiper = new Swiper('.marketing .swiper-container', {
            noSwiping: true,
            noSwipingClass: 'stop-swiping',
            autoplay: true,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    render() {
        var newprolist = [], carousel = [], newsCenterList = [];
        // 轮播图
        if (this.props.homeCarouselList) {
            var newcarousellist = this.props.homeCarouselList;
            for (let i = 0; i < newcarousellist.length; i++) {
                carousel.push(
                    <div className="item swiper-slide stop-swiping" key={i}>
                        <img src={baseUrl+newcarousellist[i].image} alt="3" width="1000px" height="494px" />
                        <div className="carousel-caption">
                        </div>
                    </div>
                );
            }
        }
        // 新品推荐
        if (this.props.homeNewProList) {
            var newlist = this.props.homeNewProList;
            for (let i = 0; i < newlist.length; i++) {
                newprolist.push(
                    <li className="swiper-slide stop-swiping" key={i}>
                        <img src={baseUrl+ newlist[i].image} alt="" width="246px" height="180px" />
                        <div className="newpro_title">
                            <p>{newlist[i].ititle}</p>
                            <p>￥ {newlist[i].idesc}</p>
                        </div>
                    </li>
                );
            }
        }
        // 新闻中心
        if (this.props.homeNewscenterList) {
            var newsCenter = this.props.homeNewscenterList;
            for (let i = 0; i < newsCenter.length; i++) {
                if (i === 0) {
                    newsCenterList.push(
                        <li key={i}>
                            <img src={newsCenter[i].url} />
                            <p>{newsCenter[i].title}</p>
                            <p>{newsCenter[i].dec}</p>
                        </li>
                    );
                } else {
                    newsCenterList.push(
                        <li className="newspic" key={i}>
                            <img src={newsCenter[i].url} />
                            <p>{newsCenter[i].title}</p>
                            <p>{newsCenter[i].dec}</p>
                        </li>
                    );
                }
            }
        }
        return (
            <div>
                {/* 轮播图 */}
                <div className="container marketing">
                    <div className=" slide swiper-container" >
                        <div className="swiper-wrapper" role="listbox">
                            {carousel}
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
                {/* 新品推荐 */}
                <div className="container">
                    <div className="clearfix">
                        <div className="border_bottom"></div>
                        <div className="newList">
                            <span className="lcricle01"></span>
                            <span className="xptj">新品推荐</span>
                            <span className="lcricle02"></span>
                        </div>
                        <div className="border_bottom"></div>
                    </div>
                    <div className="newListBox">
                        <div className="smallTitle">New Product Promation</div>
                        {/* 新品推荐轮播图 */}
                        <div className="proList">
                            <div className="Box_con clearfix">
                                <span className="arrow btnl pull-left"><img src="./img/home/arrow_left.jpg" /></span>
                                <span className="arrow btnr pull-right"><img src="./img/home/arrow_right.jpg" /></span>
                                <div className="div_propic swiper-container">
                                    <ul className="propic swiper-wrapper">
                                        {newprolist}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 新闻中心 */}
                <div className="container">
                    <div className="clearfix">
                        <div className="border_bottom"></div>
                        <div className="newList">
                            <span className="lcricle01"></span>
                            <span className="xptj">新闻中心</span>
                            <span className="lcricle02"></span>
                        </div>
                        <div className="border_bottom"></div>
                    </div>
                    <div className="newListBox">
                        <div className="smallTitle">News center</div>
                        <div className="proList">
                            <ul className="newsCenter">
                                {newsCenterList}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        homeCarouselList: state.home.homeCarousel,
        homeNewProList: state.home.newprocuctList,
        homeNewscenterList: state.home.newscenterList
    }
};
export default connect(mapStateToProps, { getCarousel, getNewproduct, getNewsCenter })(Home); 