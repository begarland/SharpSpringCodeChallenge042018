import * as React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard'
import {AppPropTypes} from '../../App'


interface AlbumCollectionTypes extends AppPropTypes {

}

const AlbumCollection = (props: AlbumCollectionTypes) => {
    return (
        <div className="album-collection">
            {props.albumCollection.albums.map((album, index) => {
                if (album.wrapperType === 'collection'){
                    return (
                        <AlbumCard {...album} key={index}/>
                    )
                }
                return null
            })}
        </div>
    )
}

export default AlbumCollection