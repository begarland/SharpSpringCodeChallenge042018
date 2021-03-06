import * as React from 'react'
import AlbumDetails from './AlbumDetails/AlbumDetails'
import {AlbumTracksStateTypes, TrackTypes} from '../../../redux/store/templates/albumTracksState'
import {AlbumTypes} from '../../../redux/store/templates/albumCollectionState'
import TrackTable from './Track/TrackTable'
import Label from '../../common/LabelComponents/Label'

interface AlbumDetailsViewPropsTypes extends AlbumTracksStateTypes{
    changePlayStatus: (index: number) => () => void;
    pushBackToApp?: () => void;
    location: {pathname: string};
}

interface AlbumDetailsViewStateTypes {}


class AlbumDetailsView extends React.Component<AlbumDetailsViewPropsTypes, AlbumDetailsViewStateTypes>{
  constructor(props) {
      super(props)
      this.state = {

      }
  }

  componentDidMount() {
      window.scrollTo(0, 0)
      if (this.props.collectionIdToSearch === null && this.props.location.pathname !== '/' ) {
          this.props.pushBackToApp()
      }

  }

  render() {
      let albumDetails: AlbumTypes
      const trackDetails: TrackTypes[] = []

      if (this.props.tracks.length > 0){
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
                      <TrackTable trackDetails={trackDetails} changePlayStatus={this.props.changePlayStatus}/>
                  </div>
              </div>
          )
      }
      else {
          return (
              <div className="album-details-view">
                  <Label label="Click on an album to view details" additionalClasses="bold-font album-collection-label"/>
              </div>
          )
      }


  }

}

export default AlbumDetailsView
