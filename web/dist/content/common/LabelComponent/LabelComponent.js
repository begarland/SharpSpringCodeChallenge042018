import * as React from 'react';
const LabelComponent = (props) => {
    const colon = (props.hideColon ? '' : ':');
    return (React.createElement("label", { className: `label ${props.additionalClasses ? props.additionalClasses : ''}` },
        props.label,
        colon));
};
export default LabelComponent;
//# sourceMappingURL=LabelComponent.js.map