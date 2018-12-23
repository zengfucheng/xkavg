/**
 *
 * name: index
 * date: 2018/12/21
 * author: cengfucheng
 * about: 路由
 *
 */

import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import HomePanel from '../containers/home/homePanel';
import EditPanel from '../containers/edit/editPanel';

export default class Router extends Component{

    render () {
        return (
            <Switch>
                <Route path='/home' component={HomePanel}/>
                <Route path='/edit' component={EditPanel}/>
                <Route path='/' component={HomePanel}/>
            </Switch>
        )
    }
}
