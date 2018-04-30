import * as React from 'react'
import Input from '../../common/InputGenerator/Inputs/Input'
import {AppPropTypes} from '../../App'
import SearchResults from './SearchResults'

export interface ArtistSearchPropTypes extends AppPropTypes {}

const ArtistSearch = (props: ArtistSearchPropTypes) => {

    return (
        <div className="artist-search">
            <div className="search-container">
                <Input onInputChange={props.inputChange} id="artistNameToSearch" data={props.appState.artistNameToSearch}/>
                <button className="search-button" onClick={props.fetchArtistsByName}>Search</button>
            </div>
            <SearchResults {...props.artistSearch} chooseArtist={props.chooseArtist}/>

        </div>
    )
}

export default ArtistSearch