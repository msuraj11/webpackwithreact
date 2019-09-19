import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers'; 
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    
    const value = createStore( rootReducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);
    return value;
}
export default configureStore;