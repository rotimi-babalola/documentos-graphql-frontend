import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello Webpack</h1>, document.getElementById('app'));

module.hot.accept();
