import * as React from 'react';
import AlbumCollection from './components/AlbumCollection/AlbumCollection';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.fetchAlbumsByArtist();
    }
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement(AlbumCollection, Object.assign({}, this.props))));
    }
}
export default App;
//# sourceMappingURL=App.js.map