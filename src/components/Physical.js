import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../sass/physical.scss';
export default class Physical extends Component {
    render() {
        return (
            <div className="tineng">
                <div className="container container-tineng">
                    <h2>体能</h2>
                    <div>
                        <div className="tn-word">
                            <p>骑行的好处：(1)能预防大脑老化，提高神经系统的敏捷性。现代运动医学研究结果
表明，骑自行车是异侧支配运动，两腿交替蹬踏可使左、右侧大脑功能同时得以开发，防止其早衰及偏废。</p>
                        </div>
                        <div>
                            <img src="./img/physical/01.jpg" />
                        </div>
                    </div>
                    <div>
                        <div className="tn-word">
                            <p>(2)能提高心肺功能，锻炼下肢肌力和增强全身耐力。骑自行车运动对内脏器官的耐
力锻炼效果与游泳和跑步相同。此项运动不仅使下肢髋、膝、踝3对关节和26对肌肉
受益，而且还可使颈、背、臂、腹、腰、腹股沟、臀部等处的肌肉。关节、韧带也得</p>
                        </div>
                        <div>
                            <img src="./img/physical/02.jpg" />
                        </div>
                    </div>
                    <div>
                        <div className="tn-word">
                            <p>(3)能减肥。骑自行车时，由于周期性的有氧运动，使锻炼者消耗较多的热量，可收到显著的减肥效果。</p>
                        </div>
                        <div>
                            <img src="./img/physical/03.jpg" />
                        </div>
                    </div>
                    <div>
                        <div className="tn-word">
                            <p>(4)能益寿延年。根据国际有关委员会的调查统计，在世界上各种不同职业人员中，以邮递员的寿命最长，原因之一就是他们在传递信件时常骑自行车的缘故。</p>
                        </div>
                        <div>
                            <img src="./img/physical/04.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}