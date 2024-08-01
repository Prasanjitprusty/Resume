import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';


export const store = createStore(rootReducer);