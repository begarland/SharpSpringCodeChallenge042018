import * as React from 'react';
import LabelComponent from '../../LabelComponent/LabelComponent';
const Select = (props) => {
    return (React.createElement("div", { className: "inline-input-container" },
        props.label && React.createElement(LabelComponent, { label: props.label, additionalClasses: props.additionalLabelClasses }),
        React.createElement("select", { id: props.id, className: `select ${props.additionalInputClasses ? props.additionalInputClasses : ''}`, value: props.data, onChange: (event) => { props.onInputChange(props.id, event.target.value); } }, props.selectOptions.map((option, optionIndex) => {
            return (React.createElement("option", { className: `select-option`, key: optionIndex, value: option }, option));
        }))));
};
export default Select;
//# sourceMappingURL=Select.js.map