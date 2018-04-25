import * as React from 'react'
import LabelComponent from '../../common/LabelComponent/LabelComponent'
import {AlbumTypes} from '../../../redux/store/templates/albumCollectionState'

interface AlbumCardTypes extends AlbumTypes {
    fetchAlbumDetailsByCollectionId: (collectionId: number) => (event: MouseEvent) => void;
}

const AlbumCard = (props: AlbumCardTypes) => {
    return (
        <div className="album-card" >
            <img src={props.artworkUrl100}/>
            <div className="album-information">
                <LabelComponent label={props.collectionName} additionalClasses="bold-font"/>
                <LabelComponent label={props.artistName}/>
                <LabelComponent label={(props.releaseDate).substr(0, 4)} />
            </div>
        </div>
    )
}

export default AlbumCard


