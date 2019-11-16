import * as serviceWorker from './serviceWorker';
import React from 'react';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { render } from 'react-dom'

import './index.css';
import App from './App';
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
