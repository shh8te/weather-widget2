import { takeEvery, all, put } from 'redux-saga/effects';
import { INCREMENT, REQUEST_DATA, GET_DATA } from '../constants';

export const incrementAction = () => {
  console.log('action called');
  const payload = {
    type: INCREMENT,
  };

  return payload;
};

function* logSomeShit(...args) {
  console.log(args);
}

export function* increment() {
  console.log('listener set fired');
  yield takeEvery(INCREMENT, logSomeShit);
}

export function* rootSaga() {
  yield all([increment()]);
}

// export function incrementAction() {
// 	console.log('action fired');

// 	return {type: INCREMENT};
// }

const getData = (id) => {
  return async dispatch => {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=6a7f0421f6db587c51706ca707dbac2b`)
      dispatch(res)
    } catch (error) {
      throw error
    }
  }
}

export function* getData(id) {
  yield put({
    type: REQUEST_DATA
  })
  yield getData(id)
  yield put({
    type: GET_DATA
  })
}
