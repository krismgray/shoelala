import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>,
   document.getElementById('root'));
registerServiceWorker();
