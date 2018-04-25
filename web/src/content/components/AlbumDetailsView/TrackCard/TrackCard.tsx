import * as React from 'react'
import LabelComponent from '../../../common/LabelComponent/LabelComponent'
import {TrackTypes} from '../../../../redux/store/templates/albumTracksState'
import {millisecondsToMinutesAndSecond} from '../../../common/commonFunctions'

interface TrackCardTypes extends TrackTypes {
    key: number;
}


const TrackCard = (props: TrackCardTypes) => {
    return (
        <div className="track-card">
            <LabelComponent label={props.trackName} />
            <LabelComponent label={millisecondsToMinutesAndSecond(props.trackTimeMillis)}/>
        </div>
    )
}

export default TrackCard