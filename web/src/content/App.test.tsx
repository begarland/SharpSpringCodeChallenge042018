import * as React from 'react'
import * as Enzyme from 'enzyme'
import * as sinon from 'sinon'
import * as Adapter from 'enzyme-adapter-react-16'
import {shallow, mount, render} from 'enzyme'

import App from './App'
import {appState} from '../redux/store/templates/appState'
import {albumCollection} from '../redux/store/templates/albumCollectionState'
import {albumTracks} from '../redux/store/templates/albumTracksState'
import {artistSearch} from '../redux/store/templates/artistSearchState'

Enzyme.configure({adapter: new Adapter()})

describe('<App/>', () => {


    const fetchAlbumsByArtistId = sinon.spy()
    const fetchAlbumDetailsByCollectionIdRedirect = sinon.spy()
    const fetchAlbumDetailsByCollectionIdNoRedirect = sinon.spy()
    const fetchArtistsByName = sinon.spy()
    const searchForNewArtist = sinon.spy()
    const inputChange = sinon.spy()
    const chooseArtist = sinon.spy()
    const closeSearch = sinon.spy()


    const AppAllProps = (
        <App
            appState={appState}
            albumCollection={albumCollection}
            albumTracks={albumTracks}
            artistSearch={artistSearch}
            fetchAlbumsByArtistId={fetchAlbumsByArtistId}
            fetchAlbumDetailsByCollectionIdRedirect={fetchAlbumDetailsByCollectionIdRedirect}
            fetchAlbumDetailsByCollectionIdNoRedirect={fetchAlbumDetailsByCollectionIdNoRedirect}
            fetchArtistsByName={fetchArtistsByName}
            searchForNewArtist={searchForNewArtist}
            inputChange={inputChange}
            chooseArtist={chooseArtist}
            closeSearch={closeSearch}
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

