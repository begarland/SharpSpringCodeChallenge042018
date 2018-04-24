import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ConnectedApp from './content/ConnectedApp';
import store from './redux/store/store';
import history from './redux/store/history';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import 'date-input-polyfill';
ReactDOM.render(React.createElement(Provider, { store: store },
    React.createElement(ConnectedRouter, { history: history },
        React.createElement(Route, { path: "/", component: ConnectedApp }))), document.getElementById('root'));
registerServiceWorker();
//# sourceMappingURL=index.js.map