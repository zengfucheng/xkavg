/**
 *
 * name: index
 * date: 2018/12/21
 * author: cengfucheng
 * about: 合并reducer
 *
 */

import { combineReducers } from 'redux';

import EditReducer from './editReducer';

let allReducer = {
    EditReducer: EditReducer
}

export default combineReducers(allReducer);
