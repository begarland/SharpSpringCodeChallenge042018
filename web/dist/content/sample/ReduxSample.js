import * as React from 'react';
import InputGenerator from '../common/InputGenerator/InputGenerator';
const ReduxSample = (props) => {
    const colorArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'white', 'gray'];
    //because the action layer will created the input data on dispatch the props will throw errors in TSLint
    const inputArray = [
        { id: 'name', inputType: 'text', label: 'name', data: props.appState.inputs.name },
        { id: 'age', inputType: 'number', label: 'age', data: props.appState.inputs.age },
        { id: 'favoriteColor', inputType: 'select', label: 'favoriteColor', data: props.appState.inputs.favoriteColor, selectOptions: colorArray }
    ];
    return (React.createElement("div", null,
        React.createElement(InputGenerator, { inputArray: inputArray, onInputChange: props.inputChange })));
};
export default ReduxSample;
//# sourceMappingURL=ReduxSample.js.map