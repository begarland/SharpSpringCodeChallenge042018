import * as React from 'react'
import AlbumCard from './AlbumCard/AlbumCard'
import {AlbumTypes} from '../../../../redux/store/templates/albumCollectionState'


interface AlbumCollectionTypes {
    albumDetails: AlbumTypes[];
    fetchAlbumDetailsByCollectionId: (collectionId: number, collectionName: string) => (Event: MouseEvent) => void;
}

const AlbumCollection = (props: AlbumCollectionTypes) => {


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
}

export default AlbumCollection