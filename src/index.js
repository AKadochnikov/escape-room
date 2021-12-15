import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from 'components/app/app';
import {applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { rootReducer } from './components/store/root-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { fetchQuestsAction } from './components/store/api-actions';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

(store.dispatch)(fetchQuestsAction());

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
