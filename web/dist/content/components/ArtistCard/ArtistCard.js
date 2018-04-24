import * as React from 'react';
import LabelComponent from '../../common/LabelComponent/LabelComponent';
const ArtistCard = (props) => {
    return (React.createElement("div", { className: "artist-card" },
        React.createElement("img", { src: props.artworkURL100 }),
        React.createElement(LabelComponent, { label: props.albumName }),
        React.createElement(LabelComponent, { label: props.artistName }),
        React.createElement(LabelComponent, { label: (props.releaseDate).substr(0, 4) })));
};
export default ArtistCard;
//# sourceMappingURL=ArtistCard.js.map