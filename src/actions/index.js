import { REQUEST_DATA } from '../constants';

export const requestData = id => {
  return {
    type: REQUEST_DATA,
    payload: {
      id,
    },
  };
};
