import * as React from 'react';
import AlbumCard from '../AlbumCard/AlbumCard';
const AlbumCollection = (props) => {
    return (React.createElement("div", { className: "album-collection" }, props.albumCollection.map((album, index) => {
        return (React.createElement(AlbumCard, Object.assign({}, album, { key: index })));
    })));
};
export default AlbumCollection;
//# sourceMappingURL=AlbumCollection.js.map