import * as React from 'react'
import {ArtistTypes} from '../../../redux/store/templates/artistSearchState'

interface ArtistDetailsTypes extends ArtistTypes {
}

const ArtistDetails = (props: ArtistDetailsTypes) => {
    return (
        <div className="artist-details-container">
            <a className="stylized-a" href={props.artistLinkUrl}><span className="view-button">View Artist on <i className="fab fa-itunes icon" /></span></a>
        </div>
    )
}

export default ArtistDetails