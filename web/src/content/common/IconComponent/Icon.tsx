import * as React from 'react'

interface IconTypes {
    id: string;
    faIcon: string;
    additionalClasses?: string;
}

const Icon = (props: IconTypes) => {
    return (
        <span
            id={`${props.id}-span`}
        >
                <i
                    id={props.id}
                    className={`fas fa-${props.faIcon} ${props.additionalClasses ? props.additionalClasses : ''}`}
                />
            </span>
    )
}
export default Icon