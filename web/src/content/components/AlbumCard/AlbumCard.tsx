import * as React from 'react'
import LabelComponent from '../../common/LabelComponent/LabelComponent'

interface AlbumCardTypes {
    artworkUrl100: string;
    albumName: string;
    artistName: string;
    releaseDate: string;
}

const AlbumCard = (props: AlbumCardTypes) => {
    return (
        <div className="artist-card">
            <img src={props.artworkUrl100}/>
            <LabelComponent label={props.albumName}/>
            <LabelComponent label={props.artistName}/>
            <LabelComponent label={(props.releaseDate).substr(0, 4)}/>
        </div>
    )
}

export default AlbumCard


