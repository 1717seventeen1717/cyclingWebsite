import { combineReducers } from 'redux';

import home from './home';
import product from './product';
import comment from './comment';
import RidingStyle from './RidingStyle';
import RidingLine from './RidingLine';
import RidingChoice from './RidingChoice';
import news from './newsCenter';
import login from './login';
import forum from './forum';

export default combineReducers({ home, product,news,comment,news, login, forum,RidingStyle,RidingLine,RidingChoice });
