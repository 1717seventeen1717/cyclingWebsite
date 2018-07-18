import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../sass/Jian1.scss'
export default class Jian1 extends Component {
    render() {
        return (
            <div>
                <div className='dbiaoti'>体能</div>
                <div id="certify">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide stop-swiping">
                                <NavLink to="/physical">
                                    <img src="./img/QXRM/a.jpg" />
                                </NavLink>
                                <p>非常难得又值钱的认证证书</p></div>
                            <div className="swiper-slide stop-swiping"><img src="./img/QXRM/b.jpg" /><p>非常难得又值钱的认证证书</p></div>
                            <div className="swiper-slide stop-swiping"><img src="./img/QXRM/c.jpg" /><p>非常难得又值钱的认证证书</p></div>
                        </div>
                    </div>

                    <div className="swiper-button-prev prev"></div>
                    <div className="swiper-button-next next"></div>
                    <div className='xbiaoti'>
                        <ul>
                            <li>尴尬的是法国大使馆的分布式的符号</li>
                            <li>尴尬的是法国大使馆的分布式的符号尴尬的是法国大使馆的分布式的符号</li>
                            <li>尴尬的是法国大使馆的分布式的符号尴尬的是法国大使馆的分布式的符号</li>
                            <li>尴尬的是法国大使馆的分布式的符号尴尬的是法国大使馆的分布式的符号</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount() {
        var certifySwiper = new Swiper('#certify .swiper-container', {
            noSwiping: true,
            noSwipingClass: 'stop-swiping',
            watchSlidesProgress: true,
            slidesPerView: 'auto',
            centeredSlides: true,
            loop: true,
            loopedSlides: 3,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false
            // },
            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },
            pagination: {
                el: '.swiper-pagination',
                //clickable :true,
            },
            on: {
                progress: function (progress) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i);
                        var slideProgress = this.slides[i].progress;
                        var modify = 1;
                        if (Math.abs(slideProgress) > 1) {
                            modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                        }
                        var translate = slideProgress * modify * 500 + 'px';
                        var scale = 1 - Math.abs(slideProgress) / 5;
                        var zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                        slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                        slide.css('zIndex', zIndex);
                        slide.css('opacity', 1);
                        if (Math.abs(slideProgress) > 3) {
                            slide.css('opacity', 0);
                        }
                    }
                },
                setTransition: function (transition) {
                    for (var i = 0; i < this.slides.length; i++) {
                        var slide = this.slides.eq(i)
                        slide.transition(transition);
                    }

                }
            }

        })

    }
}
