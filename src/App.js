import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';

import Router from './router/index';
import {editAddData} from "./actions/editAction";

import HeaderView from './components/HeaderView';

class App extends Component {
  render() {
    return (
      <div>
          <HeaderView/>
          <Router/>
      </div>
    );
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
