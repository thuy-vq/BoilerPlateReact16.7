import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import Routes from './Routes';
import { RouteMap } from './utils/constants';
import './App.scss';
import Header from './components/header/Header';
import Sider from './components/sider/Sider';
import isDiff from './utils/helpers/isDiff';

class App extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return isDiff(nextProps.location !== this.props.location);
  }
  render() {
    const { location } = this.props;
    return (
      <Layout className="app-container">
        {location.pathname !== RouteMap.ROUTE_LOGIN && <Header />}
        <Layout>
          {location.pathname !== RouteMap.ROUTE_LOGIN && <Sider />}
          <Layout.Content className="page-container">
            <div className="page-content">
              <Routes />
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      // state
    }),
    {
      // action
    }
  )(App)
);
