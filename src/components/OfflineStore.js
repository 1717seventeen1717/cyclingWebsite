import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/OfflineStore.scss';
export default class OfflineStore extends Component {
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="container">
                    <p className="mendian">线下门店</p>
                </div>
                <div className="container">
                    <div className="left-map pull-left">
                        {/* 地图 */}
                        <img src='./img/OfflineStore/map.jpg' />
                    </div>
                    <div className="right-info pull-left">
                        <div className="searchStore">
                            <div className="mendianTitle">
                                查找门店
                            </div>
                            <div className="threeAndOne">
                                <input type="text" defaultValue="省" />
                                <input type="text" defaultValue="市" />
                                <button>搜索</button>
                            </div>
                        </div>
                        <div className="addressInfo">
                            <ul>
                                <li>
                                    <p>地址：北京市朝阳区祥瑞路8号</p>
                                    <p>电话：18222334455</p>
                                </li>
                                <li>
                                    <p>地址：北京市朝阳区祥瑞路8号</p>
                                    <p>电话：18222334455</p>
                                </li>
                                <li>
                                    <p>地址：北京市朝阳区祥瑞路8号</p>
                                    <p>电话：18222334455</p>
                                </li>
                                <li>
                                    <p>地址：北京市朝阳区祥瑞路8号</p>
                                    <p>电话：18222334455</p>
                                </li>
                                <li>
                                    <p>地址：北京市朝阳区祥瑞路8号</p>
                                    <p>电话：18222334455</p>
                                </li>
                                <li>
                                    <p>地址：北京市朝阳区祥瑞路8号</p>
                                    <p>电话：18222334455</p>
                                </li>
                                <li>
                                    <p>地址：北京市朝阳区祥瑞路8号</p>
                                    <p>电话：18222334455</p>
                                </li>
                                <li>
                                    <p>地址：北京市朝阳区祥瑞路8号</p>
                                    <p>电话：18222334455</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}