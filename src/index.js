import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router, Route, Link } from 'react-router-dom'
//component
import Landing from './components/Landing'
import Header from './components/Header';
import ProductCenter from './components/ProductCenter';
import ProductComment from './components/ProductComment';
import MyOrder from './components/MyOrder';
//通过Provider提供者，给组件提供仓库内容
import Footer from './components/Footer'
import Home from './components/Home';
import QXRM from './container/QXRM';
import NewsCenter from './components/NewsCenter';
import ProIntroduce from './container/ProIntroduce';
import ProComment from './container/ProComment';
import Zhuce from './components/Zhuce'
import Zhpassword from './components/Zhpassword'
import RidingChoice from './components/RidingChoice';
import RidingLine from './components/RidingLine';
import RidingStyle from './components/RidingStyle';
import JianK from './container/JianK';
import Cart from './components/Cart';
import About from './components/About';
import OfflineStore from './components/OfflineStore';
import ForumDetails from './components/ForumDetails';
import Forum from './components/Forum';
import Accessory from './components/Accessory';
import Repair from './components/Repair';
import HealthSpirit from './components/HealthSpirit';
import ShopSuccess from './components/ShopSuccess';
import Parts from './components/Parts';
import NewsAll from './components/NewsAll';
import Physical from './components/Physical';
import {isProduct,baseUrl} from "../common/api";
window.isProduct=isProduct;
window.baseUrl=baseUrl;

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Header />
                <Route path="/" component={Home} exact={true} />
                <Route path="/landing" component={Landing} />
                <Route path="/zhuce" component={Zhuce} />
                <Route path="/zhpassword" component={Zhpassword} />
                <Route path="/qxrm" component={QXRM} />
                <Route path="/jiank" component={JianK} />
                <Route path="/newsCenter" component={NewsCenter} />
                <Route path="/productCenter" component={ProductCenter} />
                <Route exact path="/RidingChoice" component={RidingChoice} />
                <Route exact path="/RidingLine" component={RidingLine} />
                <Route exact path="/RidingStyle" component={RidingStyle} />
                <Route path="/myOrder" component={MyOrder} />
                <Route path="/productComment" component={ProductComment} />
                <Route path="/cart" component={Cart} />
                <Route path="/offlineStore" component={OfflineStore} />
                <Route path="/about" component={About} />
                <Route path="/productComment/ProIntroduce" component={ProIntroduce} />
                <Route path="/productComment/ProComment" component={ProComment} />
                <Route path="/forum" component={Forum} />
                <Route path="/forumdetails" component={ForumDetails} />
                <Route path="/accessory" component={Accessory} />
                <Route path="/repair" component={Repair} />
                <Route path="/Parts" component={Parts} />
                <Route path="/NewsAll" component={NewsAll} />
                <Route path="/ShopSuccess" component={ShopSuccess} />
                <Route path="/HealthSpirit" component={HealthSpirit} />
                <Route path="/Physical" component={Physical} />
                <Footer />
            </div>
        </Router>
    </Provider>,
    document.getElementById('app')
)