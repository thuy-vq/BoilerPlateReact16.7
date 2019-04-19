import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import './Dashboard.scss';
import { actionGetAccountInfo } from '../system/systemAction';

class Dashboard extends Component {
  state = {
    // state
  };
  render() {
    console.log('account', this.props.account);
    return (
      <div className="device-content">
        <Button onClick={this.props.actionGetAccountInfo}>Fetch Account</Button>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
        <p>Devices</p>
      </div>
    );
  }
}

export default connect(
  state => ({
    languageTrans: state.system.languageTrans,
    account: state.system.account
  }),
  {
    actionGetAccountInfo
  }
)(Dashboard);
