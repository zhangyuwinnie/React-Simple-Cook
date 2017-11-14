import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './js/App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';

const appStyle = {
    fontFamily: 'Roboto',
};

ReactDOM.render(
  <BrowserRouter>
            <MuiThemeProvider>
                <div style={appStyle}>
                    <App/>
                </div>
            </MuiThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
