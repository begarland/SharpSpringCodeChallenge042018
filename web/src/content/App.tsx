import * as React from 'react'
import { AppStateTypes } from '../redux/store/templates/appState'
import AlbumCollection from './components/AlbumCollection/AlbumCollection'
import {AlbumCollectionStateTypes} from '../redux/store/templates/albumCollectionState'

export interface AppPropTypes {
    appState: AppStateTypes;
    albumCollection: AlbumCollectionStateTypes;
    fetchAlbumsByArtist: () => void;
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
                <AlbumCollection {...this.props}/>
            </div>
        )
    }

}

export default App