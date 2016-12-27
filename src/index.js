import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// Routes
import routes from './routes';

if (window.document) {
  render(<Router routes={routes()} history={browserHistory} /> ,document.getElementById('root'));
}