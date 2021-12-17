import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from 'components/app/app';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './store/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchQuestsAction } from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

(store.dispatch)(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
