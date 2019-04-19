import api from '../../utils/services/api';
import * as constants from '../../utils/constants/actionType';

export const getAllDevices = params => {
  return api({
    method: 'get',
    url: '/api/devices',
    params
  });
};

export const actionFetchAllDevices = params => async dispatch => {
  try {
    dispatch({ type: constants.PENDING });
    const { data } = await api({
      method: 'get',
      url: '/api/devices',
      params
    });
    dispatch({
      type: constants.FETCH_ALL_DEVICES + constants.SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({ type: constants.ERROR });
  }
};
