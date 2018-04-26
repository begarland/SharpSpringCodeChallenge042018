import * as React from 'react'
import LabelComponent from '../../../common/LabelComponent/LabelComponent'
import {AlbumTypes} from '../../../../redux/store/templates/albumCollectionState'
import {TrackTypes} from '../../../../redux/store/templates/albumTracksState'

interface AlbumDetailsTypes extends TrackTypes {
}

const AlbumDetails = (props: AlbumDetailsTypes) => {
    return (
        <div className="album-details">
            <img src={props.artworkUrl100} />
            <div className="album-information">
                <LabelComponent label={props.collectionName}/>
                <LabelComponent label={props.artistName}/>
                <LabelComponent label={(props.releaseDate).substr(0, 10)}/>
                <LabelComponent label={`$${props.collectionPrice}`}/>
            </div>

        </div>
    )
}

export default AlbumDetails