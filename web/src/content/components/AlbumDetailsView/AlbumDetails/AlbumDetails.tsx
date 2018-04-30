import * as React from 'react'
import {AlbumTypes} from '../../../../redux/store/templates/albumCollectionState'
import LabelPairComponent from '../../../common/LabelComponents/LabelPair'
import {dateFormatToReadableDate} from '../../../common/commonFunctions'

const AlbumDetails = (props: AlbumTypes) => {
    const price = (props.collectionPrice ? `$${props.collectionPrice} ${props.currency}` : `Not Available`)
    return (
        <div className="album-details">
            <div className="album-information">
                <LabelPairComponent label="Album" data={props.collectionName}/>
                <LabelPairComponent label="Artist" data={props.artistName}/>
                <LabelPairComponent label="Release Date" data={dateFormatToReadableDate(props.releaseDate)}/>
                <LabelPairComponent label="Price" data={price}/>
                <LabelPairComponent label="Copyright" data={props.copyright}/>
            </div>
            <img src={props.artworkUrl100} className="album-info-artwork"/>

        </div>
    )
}

export default AlbumDetails