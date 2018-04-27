import * as React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard'
import {AppPropTypes} from '../../App'
import LabelComponent from '../../common/LabelComponents/Label'


interface AlbumCollectionTypes extends AppPropTypes {

}

const AlbumCollection = (props: AlbumCollectionTypes) => {
    return (
        <div className="album-collection">
            <LabelComponent label="Click on an album to view details" additionalClasses="bold-font album-collection-label"/>
            <div className="album-card-collection">
                {props.albumCollection.albums.map((album, index) => {
                    if (album.wrapperType === 'collection'){
                        return (
                            <AlbumCard {...album} key={index} fetchAlbumDetailsByCollectionId={props.fetchAlbumDetailsByCollectionId(album.collectionId, album.collectionName)}/>
                        )
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default AlbumCollection