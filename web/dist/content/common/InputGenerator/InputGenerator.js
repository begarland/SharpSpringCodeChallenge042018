import * as React from 'react';
import Select from './Inputs/Select';
import Input from './Inputs/Input';
const InputGenerator = (props) => {
    return (React.createElement("div", { className: "input-container" }, props.inputArray.map((input, index) => {
        if (input.inputType === 'select') {
            return (React.createElement(Select, Object.assign({}, input, { key: index, onInputChange: props.onInputChange })));
        }
        return (React.createElement(Input, Object.assign({}, input, { key: index, onInputChange: props.onInputChange })));
    })));
};
export default InputGenerator;
//# sourceMappingURL=InputGenerator.js.map