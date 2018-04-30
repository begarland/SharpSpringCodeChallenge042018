import * as React from 'react'
import Table from '../../../common/Table/Table'
import {TrackTypes} from '../../../../redux/store/templates/albumTracksState'
import {millisecondsToMinutesAndSecond} from '../../../common/commonFunctions'
import TrackPreview from './TrackPreview'

export interface TrackTableTypes {
    trackDetails: TrackTypes[];
    changePlayStatus: (trackNumber: number) => () => void;
}

const TrackTable = (props: TrackTableTypes) => {
    const tableColumnHeaders = {trackNumber: '', trackName: 'Name', trackLength: 'Length', previewUrl: 'Sample',}

    const trackData = []

    props.trackDetails.map(track => {
        const trackNumber = track.trackNumber
        const trackName = track.trackName
        const previewUrl = (track.previewUrl ?
            <TrackPreview
                previewUrl={track.previewUrl}
                isPlaying={track.isPlaying}
                changePlayStatus={props.changePlayStatus(track.trackNumber)}
            /> : ''
        )
        const trackLength = (track.trackTimeMillis ? millisecondsToMinutesAndSecond(track.trackTimeMillis) : '')
        trackData.push({trackNumber, trackName, previewUrl, trackLength})
    })

    return (
        <Table columnHeaders={tableColumnHeaders} data={trackData}/>
    )
}

export default TrackTable