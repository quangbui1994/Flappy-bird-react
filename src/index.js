import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { combineReducers, applyMiddleware, createStore } from 'redux';
import GameReducer from './store/reducers/game';
import BirdReducer from './store/reducers/bird';
import PipeReducer from './store/reducers/pipe';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
  game: GameReducer,
  bird: BirdReducer,
  pipe: PipeReducer
});

const store = createStore(rootReducers, applyMiddleware(thunk));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
