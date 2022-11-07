import React from 'react';
// import { ApolloProvider } from 'react-apollo';
// import apolloClient from './services/apolo/apolo';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/store';

render(
  // <ApolloProvider client={apolloClient}>
  <Provider store={store}>
    <App />
  </Provider>,
  // </ApolloProvider>,
  document.getElementById('root'),
);
