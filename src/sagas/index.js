import { put, takeEvery } from 'redux-saga/effects';

export function* helloSagas() {
	console.log('HELLO, SAGAS!');
}
