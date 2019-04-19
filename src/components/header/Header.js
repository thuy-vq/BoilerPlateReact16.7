import React, { Component } from 'react';
import { Menu, Icon, Dropdown } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import './Header.scss';

class Header extends Component {
  render() {
    const { account, location } = this.props;
    console.log('account', account, location);
    const menuAcc = (
      <Menu>
        <Menu.Item>
          <a className="menu-list" href="#/change-password">
            <FormattedMessage id="CHANGE_PASSWORD" />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a className="menu-list" href="#/logout">
            <FormattedMessage id="SIGNOUT" />
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <header className="header-app-container">
        <div className="logo-header">
          <img src="../vsmart_logo.png" alt="vsmart" />
        </div>
        <div className="menu-bar">
          <div style={{ width: '100%' }} />

          <Dropdown overlay={menuAcc}>
            <div className="user-name">
              <span>hungcv</span>
              <Icon
                type="user"
                style={{ padding: '5px 0 0 5px', fontSize: 24 }}
              />
            </div>
          </Dropdown>
        </div>
      </header>
    );
  }
}

export default withRouter(
  connect(
    state => ({
      languageCode: state.system.languageCode,
      account: state.system.account
    }),
    {
      // action
    }
  )(Header)
);
