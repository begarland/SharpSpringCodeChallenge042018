export const artistSearch: ArtistSearchTypes = {
    artists: []
}

export interface ArtistSearchTypes {
    artists: ArtistTypes[]
}

export interface ArtistTypes {
    wrapperType: string;
    artistType: string;
    artistName: string;
    artistLinkUrl: string;
    artistId: number;
    amgArtistId: number;
    primaryGenreName: string;
    primaryGenreId: number;

}