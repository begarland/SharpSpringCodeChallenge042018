import * as React from 'react'
import AlbumCollection from './components/AlbumCollection/AlbumCollection'
import { Route, Switch } from 'react-router'
import { AppStateTypes } from '../redux/store/templates/appState'
import { AlbumCollectionStateTypes } from '../redux/store/templates/albumCollectionState'
import { AlbumTracksStateTypes } from '../redux/store/templates/albumTracksState'
import AlbumDetailsView from './components/AlbumDetailsView/AlbumDetailsView'

export interface AppPropTypes {
    appState: AppStateTypes;
    albumCollection: AlbumCollectionStateTypes;
    albumTracks: AlbumTracksStateTypes;
    fetchAlbumsByArtist: () => void;
    fetchAlbumDetailsByCollectionId: (collectionId: number, collectionName: string) => (Event: MouseEvent) => void;
}
interface ComponentAppStateTypes {}

class App extends React.Component<AppPropTypes, ComponentAppStateTypes> {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount(){
        this.props.fetchAlbumsByArtist()
    }

    render(){
        return (
            <div className="App">
                <Switch>
                    <Route
                        exact={true}
                        path="/"
                        render={() => {
                            return (
                                <AlbumCollection {...this.props}/>
                            )
                        }}
                    />
                    <Route
                        path="/album/"
                        render={() => {
                            return (
                                <AlbumDetailsView {...this.props}/>
                            )
                        }}
                    />
                </Switch>
            </div>
        )
    }

}

export default App