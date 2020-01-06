import { put, takeEvery, all } from 'redux-saga/effects';
import { REQUEST_DATA, RECIEVE_DATA } from '../constants';
import dayjs from 'dayjs';

function* fetchData(action) {
  if (
    JSON.parse(localStorage.getItem('weather'))[action.payload.id]
  ) {
    console.log('Already exists! Not fetched!');

    const weather = JSON.parse(localStorage.getItem('weather'))[
      action.payload.id
    ].weather;

    console.log(weather);

    console.log(weather[0].dt);

    console.log(new Date(weather[0].dt));

    console.log(new Date(new Date() - weather[0].dt));

    // console.log(
    //   new Date() -
    //     JSON.parse(localStorage.getItem('weather'))[action.payload.id]
    //       .weather[0].dt,
    // );
    return;
  }

  const data = yield fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=${action.payload.id}&APPID=6a7f0421f6db587c51706ca707dbac2b`,
  ).then(res => res.json());

  localStorage.setItem(
    'weather',
    JSON.stringify({
      [data.city.id]: {
        name: data.city.name,
        weather: data.list,
        date: Number(new Date()),
      },
    }),
  );

  yield put({
    type: RECIEVE_DATA,
    payload: {
      data,
    },
  });
}

function* actionWatcher() {
  yield takeEvery(REQUEST_DATA, fetchData);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
