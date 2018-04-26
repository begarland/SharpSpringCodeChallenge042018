import * as React from 'react'
import TrackCard from './TrackCard/TrackCard'
import {AppPropTypes} from '../../App'
import AlbumDetails from './AlbumDetails/AlbumDetails'

interface AlbumDetailsViewTypes extends AppPropTypes {

}

const AlbumDetailsView = (props: AlbumDetailsViewTypes) => {
    return (
        <div className="album-details-view">

            <div className="track-container">
                {props.albumTracks.tracks.map((track, index) => {
                    if (track.wrapperType === 'collection'){
                        return (
                            <AlbumDetails {...track} key={index}/>
                        )
                    }
                    else if (track.wrapperType === 'track') {
                        return (
                            <TrackCard
                                {...track}
                                key={index}
                            />
                        )
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default AlbumDetailsView
