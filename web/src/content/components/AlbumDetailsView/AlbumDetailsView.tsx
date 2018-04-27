import * as React from 'react'
import AlbumDetails from './AlbumDetails/AlbumDetails'
import {AlbumTracksStateTypes, TrackTypes} from '../../../redux/store/templates/albumTracksState'
import {AlbumTypes} from '../../../redux/store/templates/albumCollectionState'
import TrackTable from './Track/TrackTable'
import Label from '../../common/LabelComponents/Label'

interface AlbumDetailsViewStateTypes {}


class AlbumDetailsView extends React.Component<AlbumTracksStateTypes, AlbumDetailsViewStateTypes>{
  constructor(props) {
      super(props)
      this.state = {

      }
  }

  componentDidMount() {
      window.scrollTo(0, 0)
  }

  render() {
      let albumDetails: AlbumTypes

      const trackDetails: TrackTypes[] = []

      this.props.tracks.map((albumDetailOrTrack) => {
          if (albumDetailOrTrack.wrapperType === 'collection'){
              albumDetails = albumDetailOrTrack as AlbumTypes
          } else if (albumDetailOrTrack.wrapperType === 'track') {
              trackDetails.push(albumDetailOrTrack as TrackTypes)
          }
      })

      return (
          <div className="album-details-view">
              <AlbumDetails {...albumDetails}/>
              <div className="track-container">
                  <TrackTable trackDetails={trackDetails}/>
              </div>
          </div>
      )
  }

}

export default AlbumDetailsView
