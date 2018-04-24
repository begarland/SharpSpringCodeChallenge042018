import * as React from 'react'
import AlbumCard from '../AlbumCard/AlbumCard'
import {AppPropTypes} from '../../App'


interface AlbumCollectionTypes extends AppPropTypes {

}

const AlbumCollection = (props: AlbumCollectionTypes) => {
    return (
        <div className="album-collection">
            {props.albumCollection.map((album, index) => {
                return (
                    <AlbumCard {...album} key={index}/>
                )
            })}
        </div>
    )
}

export default AlbumCollection