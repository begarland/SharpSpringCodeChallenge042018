import * as React from 'react'

interface LabelComponentTypes {
    label: string;
    additionalClasses?: string;
    showColon?: boolean;
}

const LabelComponent = (props: LabelComponentTypes) => {
    const colon = (props.showColon ? ':' : '')
    return (
        <label className={`label ${props.additionalClasses ? props.additionalClasses : ''}`}>{props.label}{colon}</label>
    )
}

export default LabelComponent

