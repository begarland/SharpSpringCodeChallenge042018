import * as React from 'react'
import { Route, Switch } from 'react-router'
import { AppStateTypes } from '../redux/store/templates/appState'
import { AlbumCollectionStateTypes, AlbumTypes } from '../redux/store/templates/albumCollectionState'
import { ArtistSearchTypes } from '../redux/store/templates/artistSearchState'
import { AlbumTracksStateTypes } from '../redux/store/templates/albumTracksState'
import AlbumDetailsView from './components/AlbumDetailsView/AlbumDetailsView'
import ArtistSearch from './components/ArtistSearch/ArtistSearch'
import ArtistDetails from './components/ArtistsAlbumCollection/ArtistDetails'
import AlbumCollection from './components/ArtistsAlbumCollection/AlbumCollection/AlbumCollection'
import { ArtistTypes } from '../redux/store/templates/artistSearchState'

export interface AppPropTypes {
    appState: AppStateTypes;
    albumCollection: AlbumCollectionStateTypes;
    albumTracks: AlbumTracksStateTypes;
    artistSearch: ArtistSearchTypes;
    fetchAlbumsByArtistId: () => void;
    fetchAlbumDetailsByCollectionIdRedirect: (collectionId: number, collectionName: string) => (Event: MouseEvent) => void;
    fetchAlbumDetailsByCollectionIdNoRedirect: (collectionId: number, collectionName: string) => (Event: MouseEvent) => void;
    fetchArtistsByName: () => void;
    searchForNewArtist: () => void;
    inputChange: (key: string, value: string) => void;
    chooseArtist: (artistId: number) => (event: any) => void;
    closeSearch: () => void;

}
interface ComponentAppStateTypes {}

class App extends React.Component<AppPropTypes, ComponentAppStateTypes> {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.props.fetchAlbumsByArtistId()
    }

    render(){

        let artistDetails: ArtistTypes

        const albumDetails: AlbumTypes [] = []

        this.props.albumCollection.albums.map((artistDetailsOrAlbums) => {
            if (artistDetailsOrAlbums.wrapperType === 'artist'){
                artistDetails = artistDetailsOrAlbums as ArtistTypes
            } else if (artistDetailsOrAlbums.wrapperType === 'collection') {
                albumDetails.push(artistDetailsOrAlbums as AlbumTypes)
            }
        })

        return (
            <div className="App">
                {this.props.appState.showInvisibleFullScreen && <div className="invisible-full-screen" onClick={this.props.closeSearch}/>}
                <div className="landscape-tablet-and-larger">
                    <div className="artist-collection">
                        <ArtistSearch {...this.props} />
                        <ArtistDetails {...artistDetails} searchForNewArtist={this.props.searchForNewArtist}/>
                    </div>
                        <AlbumCollection fetchAlbumDetailsByCollectionId={this.props.fetchAlbumDetailsByCollectionIdNoRedirect} albumDetails={albumDetails}/>
                        <AlbumDetailsView {...this.props.albumTracks}/>
                </div>
                <div className="portrait-tablet-and-smaller">
                    <Switch>
                        <Route
                            exact={true}
                            path="/"
                            render={() => {
                                return (
                                    <div className="artist-collection">
                                        <ArtistSearch {...this.props} />
                                        <ArtistDetails {...artistDetails} searchForNewArtist={this.props.searchForNewArtist}/>
                                        <AlbumCollection fetchAlbumDetailsByCollectionId={this.props.fetchAlbumDetailsByCollectionIdRedirect} albumDetails={albumDetails}/>
                                    </div>
                                )
                            }}
                        />
                        <Route
                            path="/album/"
                            render={() => {
                                return (
                                    <AlbumDetailsView {...this.props.albumTracks} />
                                )
                            }}
                        />
                    </Switch>
                </div>
            </div>
        )
    }

}

export default App