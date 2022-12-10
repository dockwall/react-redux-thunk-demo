import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import App from "./components/App";
import reducers from './reducers'

// We import "applyMiddleware" from Redux.
// It allows us to connect redux-thunk as middleware to Redux
// Action Creator => Action => Dispatch => *Middleware* => Reducer => Store

// Redux-thunk allows to dispatch actions-objects and action-functions

const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
