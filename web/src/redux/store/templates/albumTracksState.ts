export const albumTracks: AlbumTracksStateTypes = {
    collectionIdToSearch: null,
    tracks: [],
}

export interface AlbumTracksStateTypes {
    collectionIdToSearch: null | number;
    tracks: TrackTypes[]
}

export interface TrackTypes {
    wrapperType: string;
    kind: string;
    artistId: number;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    artistViewUrl: string;
    collectionViewUrl: string;
    trackViewUrl: string;
    previewUrl: string;
    artworkUrl30: number;
    artworkUrl60: number;
    artworkUrl199: number;
    collectionPrice: number;
    trackPrice: number;
    releaseDate: string;
    collectionExplicitness: string;
    trackExplicitness: string;
    discCount: number;
    discNumber: number;
    trackCount: number;
    trackNumber: number;
    trackTimeMillis: number;
    country: string;
    currency: string;
    primaryGenreName: string;
    isStreamable: boolean;
}