import * as React from 'react'
import AlbumCard from './AlbumCard/AlbumCard'
import {AlbumTypes} from '../../../../redux/store/templates/albumCollectionState'
import Label from '../../../common/LabelComponents/Label'


interface AlbumCollectionTypes {
    albumDetails: AlbumTypes[];
    fetchAlbumDetailsByCollectionId: (collectionId: number, collectionName: string) => (Event: MouseEvent) => void;
}

const AlbumCollection = (props: AlbumCollectionTypes) => {

    if (props.albumDetails.length > 0) {
        return (
            <div className="album-collection">
                <div className="album-card-collection">
                    {props.albumDetails.map((album, index) => {
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
    } else {
        return (
            <div className="album-collection">
                <Label label="Search for an artist to view albums" additionalClasses="bold-font album-collection-label"/>
            </div>
        )
    }


}

export default AlbumCollection