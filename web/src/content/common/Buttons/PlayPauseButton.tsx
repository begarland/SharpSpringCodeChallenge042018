import * as React from 'react'
import Icon from '../IconComponent/Icon'


interface PlayPauseButtonTypes {
    isPlaying: boolean;
    onClick: () => void;
}

const PlayPauseButton = (props: PlayPauseButtonTypes) => {
    return (
        <button onClick={props.onClick}>
            {props.isPlaying && <Icon id="pause-button" faIcon={'pause-circle'}/>}
            {!props.isPlaying && <Icon id="play-button" faIcon={'play-circle'}/>}
        </button>
    )
}

export default PlayPauseButton