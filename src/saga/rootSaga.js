import actionWatcher from '../saga/sagas'; 
import { all } from 'redux-saga/effects';
require('es6-promise').polyfill();
require('isomorphic-fetch');


export default function* rootSaga() 
{
    yield all([
      actionWatcher(),
    ]);
}