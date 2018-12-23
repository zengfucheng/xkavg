/**
 *
 * name: HeaderView
 * date: 2018/12/22
 * author: cengfucheng
 * about: 顶部栏
 *
 */

import React, { Component } from 'react';

import { Button } from 'semantic-ui-react';


export default class HeaderView extends Component{

    render () {
        // let { title, login } = this.props.datas;
        return (
            <div>
                {/*{ login ? <h1>{title}</h1> : <h1>未登陆</h1> }*/}
                <h1>PXTAR AVG</h1>
                <div>
                    <div className='ui icon input'>
                        <input type='text' placeholder='Search...'/>
                        <i aria-hidden='true' className='search icon'/>
                    </div>
                </div>
            </div>
        )
    }
}
