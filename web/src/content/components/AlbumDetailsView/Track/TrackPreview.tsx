import * as React from 'react'
import FilePlayer from 'react-player/lib/players/FilePlayer'
import PlayPauseButton from '../../../common/Buttons/PlayPauseButton'

interface TrackPreviewTypes {
    previewUrl: string;
    isPlaying: boolean,
    changePlayStatus: () => void;

}

const TrackPreview = (props: TrackPreviewTypes) => {
        return (
            <div>
                <FilePlayer
                    url={props.previewUrl}
                    playing={props.isPlaying}
                    height="0px"
                    width="0px"
                />
                <PlayPauseButton isPlaying={props.isPlaying} onClick={props.changePlayStatus}/>
            </div>
        )
    }

export default TrackPreview