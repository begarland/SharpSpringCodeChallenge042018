import * as React from 'react'
import Table from '../../../common/Table/Table'
import {TrackTypes} from '../../../../redux/store/templates/albumTracksState'
import {millisecondsToMinutesAndSecond} from '../../../common/commonFunctions'
import TrackPreview from './TrackPreview'

export interface TrackTableTypes {
    trackDetails: TrackTypes[];
}

const TrackTable = (props: TrackTableTypes) => {
    const tableColumnHeaders = {trackName: 'Name', trackLength: 'Length', previewUrl: 'Sample',}

    const trackData = []

    props.trackDetails.map((track) => {
        const trackName = track.trackName
        const previewUrl = <TrackPreview previewUrl={track.previewUrl}/>
        const trackLength = millisecondsToMinutesAndSecond(track.trackTimeMillis)
        trackData.push({trackName, previewUrl, trackLength})
    })

    return (
        <Table columnHeaders={tableColumnHeaders} data={trackData}/>
    )
}

export default TrackTable