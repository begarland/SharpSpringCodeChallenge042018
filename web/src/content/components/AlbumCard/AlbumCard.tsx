import * as React from 'react'
import LabelComponent from '../../common/LabelComponent/LabelComponent'

interface AlbumCardTypes {
    artworkUrl100: string;
    collectionName: string;
    artistName: string;
    releaseDate: string;
}

const AlbumCard = (props: AlbumCardTypes) => {
    return (
        <div className="album-card">
            <img src={props.artworkUrl100}/>
            <div className="album-information">
                <LabelComponent label={props.collectionName}/>
                <LabelComponent label={props.artistName}/>
                <LabelComponent label={(props.releaseDate).substr(0, 4)}/>
            </div>
        </div>
    )
}

export default AlbumCard


