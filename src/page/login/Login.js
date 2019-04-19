import React, { Component } from 'react';
import { Form, Button, Icon, Input } from 'antd';
// import { FormattedMessage } from 'react-intl';
import Cookie from 'js-cookie';
import { connect } from 'react-redux';
import injectIntl from '../../utils/hoc/intl';
import { TOKEN, EXPIRED_TIME } from '../../utils/constants/constants';
// import * as Services from './LoginService';
import { actionGetAccountInfo } from '../system/systemAction';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      showErrMes: false
    };
    if (Cookie.get(TOKEN)) {
      window.history.back();
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((error, data) => {
      if (!error) {
        this.setState({ loading: true });
        Cookie.set(TOKEN, 'token 123456789', {
          expires: new Date(EXPIRED_TIME + Date.now() + 3000)
        });
        window.location.href = '#/admin/dashboard';
        // Services.requestLogin(data)
        //   .then(res => {
        //     Cookie.set(Constants.TOKEN, res.data.id_token, {
        //       expires: new Date(Constants.EXPIRED_TIME + Date.now() + 3000)
        //     });
        //     window.location = '#/';
        //     this.setState({ loading: false });
        //     Services.getAccountInfo().then(res => {
        //       this.props.actionUpdateUserInfo(res.data);
        //     });
        //   })
        //   .catch(this.onError);
      }
    });
  };

  usrFieldOptions = {
    rules: [
      { required: true, message: 'Hãy nhập username!' },
      { pattern: "^[_'.@A-Za-z0-9-]*$", message: 'Hãy nhập username' }
    ],
    getValueFromEvent: e => e.target.value.trim()
  };

  pwdFieldOptions = {
    rules: [{ required: true, message: 'Hãy nhập password!' }],
    getValueFromEvent: e => e.target.value.trim()
  };

  handleCancel = () => {
    this.props.form.resetFields();
    this.setState({ showErrMes: false, loading: false });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { showErrMes, loading } = this.state;
    if (Cookie.get(TOKEN)) {
      return null;
    }
    return (
      <div className="login-wrapper">
        <div className="login-container">
          <div className="logo-container">
            <img src="../vsmart_logo.png" alt="logo" className="logo-img" />
            <p className="login-header-text">VSMART</p>
          </div>
          {showErrMes && (
            <p className="fail-text">Username hoặc password không chính xác!</p>
          )}

          <Form onSubmit={this.handleSubmit}>
            <span className="lab-text">Username</span>
            <Form.Item>
              {getFieldDecorator('username', this.usrFieldOptions)(
                <Input prefix={<Icon type="user" />} placeholder="Username" />
              )}
            </Form.Item>
            <span className="lab-text">Password</span>
            <Form.Item>
              {getFieldDecorator('password', this.pwdFieldOptions)(
                <Input
                  type="password"
                  prefix={<Icon type="lock" />}
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item className="footer-container">
              <Button onClick={this.handleCancel} className="cancel-btn">
                Hủy bỏ
              </Button>
              <Button type="primary" htmlType="submit" loading={loading}>
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    actionGetAccountInfo
  }
)(injectIntl(Form.create()(Login)));
