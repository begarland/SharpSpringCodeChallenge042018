import * as React from 'react';
const ObservableSample = (props) => {
    return (React.createElement("div", { id: "observable-sample-container" },
        React.createElement("div", { id: "observable-sample-box-slider-container" },
            React.createElement("div", { id: "observable-sample-box", className: `${props.appState.moveBox ? 'box-animate' : ''}` })),
        React.createElement("button", { onClick: props.triggerObservable }, "Slide box")));
};
export default ObservableSample;
//# sourceMappingURL=ObservableSample.js.map