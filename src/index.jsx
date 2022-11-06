import React from 'react';
// import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import './index.css';
import App from './App';
// import apolloClient from './services/apolo/apolo';
// import reducers from './store/reducers';

// export const store = createStore(reducers);

render(
  // <ApolloProvider client={apolloClient}>
  //   <Provider store={store}>
  <App />,
  //   </Provider>
  // </ApolloProvider>,
  document.getElementById('root'),
);
