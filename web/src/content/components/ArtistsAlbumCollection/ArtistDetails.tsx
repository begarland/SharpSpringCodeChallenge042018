import * as React from 'react'
import LabelPair from '../../common/LabelComponents/LabelPair'
import {ArtistTypes} from '../../../redux/store/templates/artistSearchState'

interface ArtistDetailsTypes extends ArtistTypes {
    searchForNewArtist: () => void;
}

const ArtistDetails = (props: ArtistDetailsTypes) => {
    return (
        <div className="artist-details-container">
            <LabelPair label="Artist" data={props.artistName}/>
            <LabelPair label="Primary Genre" data={props.primaryGenreName}/>
            <a className="stylized-a" href={props.artistLinkUrl}><span className="view-button">View Artist on Apple iTunes</span></a>
            <button className="search-button" onClick={props.searchForNewArtist}>Search for a new Artist</button>
        </div>
    )
}

export default ArtistDetails