/**
 *
 * name: index
 * date: 2018/12/21
 * author: cengfucheng
 * about: 仓库
 *
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/index';

export default createStore(rootReducer, composeWithDevTools() );
