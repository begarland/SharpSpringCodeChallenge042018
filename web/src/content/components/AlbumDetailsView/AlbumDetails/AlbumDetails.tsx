import * as React from 'react'
import LabelComponent from '../../../common/LabelComponent/LabelComponent'
import {AlbumTypes} from '../../../../redux/store/templates/albumCollectionState'

interface AlbumDetailsTypes extends AlbumTypes {}

const AlbumDetails = (props: AlbumDetailsTypes) => {
    return (
        <div className="album-details">
            <img src={props.artworkUrl100} className="large-album-art"/>
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