import * as React from 'react'
import Label from './Label'

interface LabelPairTypes {
    label: string;
    data: string | number;
    additionalClasses?: string;
}

const LabelPair = (props: LabelPairTypes) => {
    return (
        <div className={`label-pair ${props.additionalClasses ? props.additionalClasses : ''}`}>
            <Label label={props.label} showColon={true} additionalClasses="bold-font inline-label"/>
            <Label label={props.data} additionalClasses="inline-label"/>
        </div>
    )
}

export default LabelPair