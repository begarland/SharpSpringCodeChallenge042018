import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as sinon from 'sinon'
import * as Adapter from 'enzyme-adapter-react-16'
import {shallow, mount, render} from 'enzyme'

import App from './App'
import {appState} from '../redux/store/templates/appState'
import {albumCollection} from '../redux/store/templates/albumCollectionState'
import {albumTracks} from '../redux/store/templates/albumTracksState'

Enzyme.configure({adapter: new Adapter()})

describe('<App/>', () => {


    const fetchAlbumsByArtist = sinon.spy()
    const fetchAlbumDetailsByCollectionId = sinon.spy()

    const AppAllProps = (
        <App
            appState={appState}
            albumCollection={albumCollection}
            albumTracks={albumTracks}
            fetchAlbumsByArtist={fetchAlbumsByArtist}
            fetchAlbumDetailsByCollectionId={fetchAlbumDetailsByCollectionId}

        />)

    let AppAllPropsShallow

    beforeEach(() => {
        AppAllPropsShallow = shallow(AppAllProps)
    })


    describe('all props', () => {
        it('should exist', () => {
            expect(AppAllPropsShallow.exists()).toEqual(true)
        })
    })

})

