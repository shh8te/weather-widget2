import { REQUEST_DATA, RECIEVE_DATA } from '../constants';

const initialState = {
  data: {},
  isFetching: false,
  city: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case RECIEVE_DATA: {
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
