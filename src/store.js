import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension'

import NoteReducer from './Reducer/reducer';
// import { getNotes } from './Reducer/reducer';

const reducers = combineReducers({
    NoteReducer: NoteReducer,
    // getNotes: getNotes
})

const store = createStore(
    reducers,
   composeWithDevTools(applyMiddleware(thunkMiddleware))
)

export default store;