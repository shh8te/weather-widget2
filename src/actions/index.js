import { takeEvery, all } from 'redux-saga/effects';
import { INCREMENT } from '../constants';

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
