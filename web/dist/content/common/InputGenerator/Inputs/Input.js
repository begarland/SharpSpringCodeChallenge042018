import * as React from 'react';
import LabelComponent from '../../LabelComponent/LabelComponent';
const Input = (props) => {
    return (React.createElement("div", { className: "inline-input-container" },
        props.label && React.createElement(LabelComponent, { label: props.label, additionalClasses: props.additionalLabelClasses }),
        React.createElement("input", { id: props.id, className: `input ${props.additionalInputClasses ? props.additionalInputClasses : ''}`, type: (props.inputType ? props.inputType : 'text'), value: props.data || '', onChange: (event) => { props.onInputChange(props.id, event.target.value); } })));
};
export default Input;
//# sourceMappingURL=Input.js.map