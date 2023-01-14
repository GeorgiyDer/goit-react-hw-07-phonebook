import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redax/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { App } from 'components/app/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
            <React.StrictMode>
              <App />
            </React.StrictMode>
    </Provider>
  </ThemeProvider>
);
