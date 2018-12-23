/**
 *
 * name: editPanel
 * date: 2018/12/21
 * author: cengfucheng
 * about: 编辑器页面
 *
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editAddData } from '../../actions/editAction';

import EditScss from './edit.scss';

import { Button } from 'semantic-ui-react';

import HeaderView from '../../components/HeaderView';

class EditPanel extends Component{

    // 客户端渲染
    componentDidMount () {
        console.log('进入编辑器');
        this.props.addData(editAddData('zfc'));
    }

    // 删除组件
    componentWillUnmount () {
    }

    render () {
        console.log(EditScss)
        return (
            <div className={EditScss.box}>
                {/*<HeaderView datas={this.props} />*/}
                <input value={this.props.value}/>
                <button onClick={this.props.addData}>添加</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        title: state.EditReducer.title,
        value: state.EditReducer.name,
        login: state.EditReducer.login,
        users: state.EditReducer.users
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addData: () => dispatch(editAddData('zfc'))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPanel);
