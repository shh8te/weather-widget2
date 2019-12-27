import { takeEvery, all, put } from 'redux-saga/effects';
import { REQUEST_DATA, GET_DATA, RECIEVE_DATA, INCREMENT } from '../constants';
import { helloSagas } from '../sagas'

export const increment = () => {
  return {
    type: INCREMENT
  }
}
