import Cookie from 'js-cookie';

import api from '../../../utils/services/api';
import { Constants } from '../../../utils/constants';

export const requestLogin = users => {
  Cookie.remove(Constants.EXPIRED);
  Cookie.remove(Constants.TOKEN);
  if (users.rememberMe) {
    Cookie.set(Constants.LAST_LOGIN, users.username);
  } else {
    Cookie.remove(Constants.LAST_LOGIN);
  }
  return api({
    method: 'post',
    url: '/api/authenticate',
    data: users
  });
};

export const getAccountInfo = () => {
  return api({
    method: 'get',
    url: '/api/account'
  });
};
