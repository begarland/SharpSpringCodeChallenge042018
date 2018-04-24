import * as React from 'react';
import { Route, Switch } from 'react-router';
import ObservableSample from './ObservableSample';
import ReduxSample from './ReduxSample';
const Routes = (props) => {
    return (React.createElement("div", null,
        React.createElement(Switch, null,
            React.createElement(Route, { exact: true, path: "/redux", render: () => {
                    return (React.createElement(ReduxSample, Object.assign({}, props)));
                } }),
            React.createElement(Route, { exact: true, path: "/redux-observable", render: () => {
                    return (React.createElement(ObservableSample, { appState: props.appState, goBackToApp: props.goBackToApp, triggerObservable: props.triggerObservable }));
                } }))));
};
export default Routes;
//# sourceMappingURL=Routes.js.map