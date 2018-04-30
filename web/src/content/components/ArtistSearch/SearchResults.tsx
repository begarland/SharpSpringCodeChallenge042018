import * as React from 'react'
import Icon from '../../common/IconComponent/Icon'
import {ArtistSearchTypes} from '../../../redux/store/templates/artistSearchState'
import Label from '../../common/LabelComponents/Label'

interface SearchResultsTypes extends ArtistSearchTypes {
    chooseArtist: (artistId: number) => (event: any) => void;
}

const SearchResults = (props: SearchResultsTypes) => {
    if (props.spinner){
        return (
            <div className="search-results-spinner">
                <Icon id="spinner" faIcon="spinner fa-pulse"/>
            </div>
        )
    } else if (props.notFound){
        return (
            <div className="search-results">
                <Label label='Artist not found' additionalClasses="bold-font centered"/>
            </div>
        )
    } else if (props.notFound === null){
        return (
            <div className="search-results-null">

            </div>
        )
    } else {
        return (
            <div className="search-results">
                {props.artists.map((artist, index) => {
                    return (
                        <div className="artist-card" onClick={props.chooseArtist(artist.artistId)} key={index}>
                            <Label label={artist.artistName} additionalClasses="bold-font"/>
                            <Label label={artist.primaryGenreName} additionalClasses="gray-font tab-left"/>
                        </div>
                    )
                })}
            </div>
        )
    }


}

export default SearchResults