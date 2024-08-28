import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import * as store from './store/index.js';
import Custom from './modules/custom/containers/custom.jsx';
import {reportException } from './modules/core/helpers.js';

window.addEventListener('error', (err) => {
  if (reportException) {
    reportException(err, true);
  } else {
    console.error('ReportException not defined');
  }
});

// Main render function
const renderApp = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store.getStore()}>
        <Custom />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Initial render
renderApp();

// Hot Module Replacement API
if (module && module.hot) {
    module.hot.accept('../modules/custom/containers/custom.jsx', () => {
    renderApp();
  });
}
