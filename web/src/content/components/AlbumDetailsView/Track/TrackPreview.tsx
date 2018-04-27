import * as React from 'react'
import FilePlayer from 'react-player/lib/players/FilePlayer'
import PlayPauseButton from '../../../common/Buttons/PlayPauseButton'

interface TrackPreviewPropTypes {
    previewUrl: string;
}
interface TrackPreviewStateTypes {
    isPlaying: boolean;
}

class TrackPreview extends React.Component<TrackPreviewPropTypes, TrackPreviewStateTypes> {
    constructor(props){
        super(props)
        this.state = {
            isPlaying: false,
        }
    }

    changePlayStatus = () => {
        this.setState({
            isPlaying: !this.state.isPlaying
        })
    }

    render(){
        return (
            <div>
                <FilePlayer
                    className="test"
                    url={this.props.previewUrl}
                    playing={this.state.isPlaying}
                    height="0px"
                    width="0px"
                />
                <PlayPauseButton isPlaying={this.state.isPlaying} onClick={this.changePlayStatus}/>
            </div>
        )
    }
}

export default TrackPreview