import * as React from 'react'
import Input from '../../common/InputGenerator/Inputs/Input'
import {AppPropTypes} from '../../App'

interface ArtistSearchTypes extends AppPropTypes {

}

const ArtistSearch = (props: ArtistSearchTypes) => {

    return (
        <div className="artist-search">
            <Input onInputChange={props.inputChange} id="artistNameToSearch" data={props.appState.artistNameToSearch}/>
            <button onClick={props.fetchArtistsByName}>Search</button>
        </div>
    )
}

export default ArtistSearch