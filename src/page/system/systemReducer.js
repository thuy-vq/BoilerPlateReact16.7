import cookie from 'js-cookie';
import * as constants from '../../utils/constants/actionType';
import {
  DEFAULT_LANGUAGE_CODE,
  DEFAULT_LANGUAGE_TRANS,
  LANGUAGE_CODE,
  LANGUAGE_TRANS
} from '../../utils/constants/constants';

const initialState = {
  isLoading: false,
  languageCode: cookie.get(LANGUAGE_CODE) || DEFAULT_LANGUAGE_CODE,
  languageTrans: cookie.get(LANGUAGE_TRANS) || DEFAULT_LANGUAGE_TRANS,
  account: {},
  locale: 'en'
};

const system = (state = initialState, action) => {
  switch (action.type) {
    case constants.PENDING:
      return {
        ...state,
        isLoading: true
      };
    case constants.FETCH_ACCOUNT_INFO + constants.SUCCESS:
      return {
        ...state,
        account: action.payload
      };
    case constants.CHANGE_LANGUAGE:
      return {
        ...initialState,
        languageCode: action.payload.languageCode,
        languageTrans: action.payload.languageTrans
      };
    case constants.SIGN_OUT:
      return {
        ...initialState,
        isLoading: false
      };
    case constants.ERROR:
      return {
        ...initialState
      };
    case constants.DONE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default system;
