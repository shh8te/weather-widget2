import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../actions';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

// const store = createStore(
// 	reducer,
// 	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

window.store = store;

export default store;
