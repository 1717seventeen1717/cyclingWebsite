import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getNews } from '../action';

import '../sass/NewsCenter.scss';
class NewsCenter extends Component {
    constructor() {
        super();
        this.state = {
            num: 6,
            length: 0,
            n: 0,
            btn: []
        }
    }
    componentDidMount() {
        this.props.getNews();
        this.loadMore();
    }
    loadMore = () => {
        this.props.getNews(this.state.num);
        //加载更多 如有加载结束 加载更多按钮消失
        if (this.state.length == this.props.newsList.length - 3) {
            this.state.btn = []
        } else {
            this.state.btn = [<button className="loadmore" onClick={this.loadMore} key={++this.state.n}>加载更多</button>];
        }
        this.setState({
            num: this.state.num + 3,
            length: this.props.newsList.length
        })
    }
    render() {
        // 新闻
        var newsarr = [];
        if (this.props.newsList) {
            var newsCenter = this.props.newsList;

            for (let i = 0; i < newsCenter.length; i++) {
                if (i % 3 == 0 || i == 0) {
                    newsarr.push(
                        <li key={i}>
                            <NavLink to="/NewsAll">
                                <img src={newsCenter[i].url} />
                                <p>{newsCenter[i].title}</p>
                                <p>{newsCenter[i].dec}</p>
                            </NavLink>
                        </li>
                    )
                } else {
                    newsarr.push(
                        <li key={i} className="newspic">
                            <NavLink to="/NewsAll">
                                <img src={newsCenter[i].url} />
                                <p>{newsCenter[i].title}</p>
                                <p>{newsCenter[i].dec}</p>
                            </NavLink>
                        </li>
                    )
                }

            }
        }
        return (
            <div>
                <div className="container">
                    <img src="./img/news/news.jpg" width="1000px" />
                </div>
                <div className="container">
                    <div className="bigTitle">我行我速新闻</div>
                    <div className="subheading">最新快报</div>
                    <div>
                        <div className="proList clearfix">
                            <ul className="newsCenter">
                                {/* 第1 4 7 11...不加类名  新闻信息*/}
                                {newsarr}
                            </ul>
                        </div>
                    </div>
                    <div className="pageBtn">
                        {this.state.btn}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        newsList: state.news.newsList
    }
};
export default connect(mapStateToProps, { getNews })(NewsCenter); 