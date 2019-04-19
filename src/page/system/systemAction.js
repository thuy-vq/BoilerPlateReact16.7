import cookie from 'js-cookie';
import { message } from 'antd';
import api from '../../utils/services/api';
import * as constants from '../../utils/constants/actionType';
import { TOKEN, EXPIRED } from '../../utils/constants/constants';
import { LANGUAGE_CODE, LANGUAGE_TRANS } from '../../utils/constants/constants';

export const actionLogout = () => {
  cookie.remove(TOKEN);
  cookie.remove(EXPIRED);
  return { type: constants.SIGN_OUT };
};
export const handleError = err => {
  if (err.status && err.status === 401) {
    message.error('server error!');
    window.location.href = 'logout';
  } else {
    console.log('server error: ', err);
  }
};
export const actionGetAccountInfo = () => async dispatch => {
  try {
    dispatch({ type: constants.PENDING });
    const { data } = await api({
      method: 'get',
      url: '/api/account'
    });
    dispatch({
      type: constants.FETCH_ACCOUNT_INFO + constants.SUCCESS,
      payload: data
    });
  } catch (error) {
    handleError(error);
  } finally {
    dispatch({ type: constants.DONE });
  }
};

export const actionChangeLang = (langCode, langTrans) => {
  cookie.set(LANGUAGE_CODE, langCode);
  cookie.set(LANGUAGE_TRANS, langTrans);
  return {
    type: constants.CHANGE_LANGUAGE,
    payload: {
      languageCode: langCode,
      languageTrans: langTrans
    }
  };
};
