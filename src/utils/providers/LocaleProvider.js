import React, { Component } from 'react';
import { LocaleProvider } from 'antd';
import { connect } from 'react-redux';
import moment from 'moment';
import { IntlProvider, addLocaleData } from 'react-intl';
import vi_VN from 'antd/lib/locale-provider/vi_VN';
import en_US from 'antd/lib/locale-provider/en_US';
import en from 'react-intl/locale-data/en';
import vi from 'react-intl/locale-data/vi';

import viTrans from '../locales/vi.json';
import enTrans from '../locales/en.json';

moment.locale('vi');
addLocaleData(en, enTrans);
addLocaleData(vi, viTrans);
const getLocale = locale => ({
  locale,
  messages: locale === 'en' ? enTrans : viTrans
});

class LocaleComponent extends Component {
  render() {
    const { locale } = this.props;
    return (
      <IntlProvider {...getLocale(locale)}>
        <LocaleProvider locale={locale === 'en' ? en_US : vi_VN}>
          {this.props.children}
        </LocaleProvider>
      </IntlProvider>
    );
  }
}

export default connect(
  state => ({
    locale: state.system.locale
  }),
  {
    //action
  }
)(LocaleComponent);
